"use client";

import { useId, useState } from "react";
import { buildingTypes, site } from "@/lib/site";

type Variant = "card" | "full";

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({
  variant = "full",
  source = "unknown",
}: {
  variant?: Variant;
  source?: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const isCard = variant === "card";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (res.ok && body.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          body.error ??
            "Something went wrong sending your request. Please call us instead.",
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Couldn't reach the server. Please call us and we'll take your details by phone.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-ink bg-paper p-6"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl font-semibold text-stamp">
          Request received.
        </p>
        <p className="mt-2">
          We&apos;ll call you back within one business day to talk through sizes
          and pricing. Need it sooner? Call{" "}
          <a className="link-action" href={site.phoneHref}>
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <div className={isCard ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field id={`${uid}-name`} name="name" label="Name" required autoComplete="name" />
        <Field
          id={`${uid}-phone`}
          name="phone"
          label="Phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
        />
        {!isCard && (
          <Field
            id={`${uid}-email`}
            name="email"
            label="Email"
            type="email"
            autoComplete="email"
            inputMode="email"
          />
        )}
        <Field
          id={`${uid}-zip`}
          name="zip"
          label="ZIP where it goes"
          autoComplete="postal-code"
          inputMode="numeric"
        />
        <div className={isCard ? "" : "sm:col-span-2"}>
          <label
            htmlFor={`${uid}-type`}
            className="mb-1 block font-display font-semibold"
          >
            Building type
          </label>
          <select
            id={`${uid}-type`}
            name="buildingType"
            className="field-line"
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            {buildingTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {!isCard && (
          <Field
            id={`${uid}-size`}
            name="size"
            label="Rough size (W × L × H)"
            placeholder="e.g. 24 × 31 × 10 ft"
            className="sm:col-span-2"
          />
        )}
        {!isCard && (
          <div className="sm:col-span-2">
            <label
              htmlFor={`${uid}-notes`}
              className="mb-1 block font-display font-semibold"
            >
              Anything else
            </label>
            <textarea
              id={`${uid}-notes`}
              name="notes"
              rows={4}
              className="field-line resize-y"
              placeholder="Doors, colors, concrete or gravel, timing…"
            />
          </div>
        )}
      </div>

      {status === "error" && (
        <p className="text-press" role="alert">
          {message}{" "}
          <a className="link-action" href={site.phoneHref}>
            {site.phone}
          </a>
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request a quote"}
        </button>
        <span className="text-sm text-ink-soft">
          or call{" "}
          <a className="link-action" href={site.phoneHref}>
            {site.phone}
          </a>
        </span>
      </div>
      <p className="text-sm text-ink-soft">
        No cost, no obligation. We use your details only to prepare your quote.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  placeholder,
  autoComplete,
  inputMode,
  className,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block font-display font-semibold">
        {label}
        {required && <span className="text-press"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="field-line"
      />
    </div>
  );
}
