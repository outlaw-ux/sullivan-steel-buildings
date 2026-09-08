"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

/*
 * Analytics consent gate.
 *
 * Google Analytics is not loaded at all until the visitor accepts. The choice
 * is remembered in localStorage. The footer's "Cookie choices" control clears
 * it and reloads, which brings the banner back.
 */

const STORAGE_KEY = "ssb:analytics-consent";
const GA_MEASUREMENT_ID = "G-60KDPRE4NC";

type Choice = "granted" | "denied";

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setChoice(readChoice());
    setReady(true);

    const sync = () => setChoice(readChoice());
    window.addEventListener("ssb:consent-change", sync);
    return () => window.removeEventListener("ssb:consent-change", sync);
  }, []);

  const decide = useCallback((next: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode or storage disabled — honor the choice for this page view.
    }
    setChoice(next);
  }, []);

  if (!ready) return null;

  return (
    <>
      {choice === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}

      {choice === null && (
        <div
          role="region"
          aria-label="Analytics cookie notice"
          className="animate-slide-up fixed inset-x-0 bottom-[4.75rem] z-50 lg:bottom-0"
        >
          <div className="border-t-2 border-ink bg-paper shadow-[0_-6px_0_var(--color-rule)]">
            <div className="wrap flex flex-col gap-3 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink-soft sm:max-w-[54ch]">
                We use Google Analytics to see which pages people find useful. It
                sets cookies in your browser. Nothing is shared with advertisers.
              </p>
              <div className="flex shrink-0 gap-2.5">
                <button
                  type="button"
                  onClick={() => decide("denied")}
                  className="btn btn-ghost btn-sm"
                >
                  Decline
                </button>
                <button
                  type="button"
                  onClick={() => decide("granted")}
                  className="btn btn-sm"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
