"use client";

/*
 * Re-opens the analytics consent banner: clears the stored choice and reloads
 * so Google Analytics starts fresh from the visitor's next decision.
 */
export function CookieChoicesButton() {
  return (
    <button
      type="button"
      className="link-action text-left"
      onClick={() => {
        try {
          localStorage.removeItem("ssb:analytics-consent");
        } catch {
          // ignore
        }
        window.location.reload();
      }}
    >
      Cookie choices
    </button>
  );
}
