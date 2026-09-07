/*
 * Quote request endpoint.
 *
 * For now this validates the payload and logs it server-side so nothing is lost
 * while the business wires up email/CRM delivery. To send email, drop a call to
 * your provider (Resend, SES, a Zapier catch hook, etc.) where noted below.
 */

type QuotePayload = Record<string, string>;

const FIELDS = [
  "name",
  "phone",
  "email",
  "zip",
  "buildingType",
  "size",
  "notes",
  "source",
] as const;

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "We couldn't read that request. Please try again." },
      { status: 400 },
    );
  }

  const input = (raw ?? {}) as QuotePayload;
  const data: QuotePayload = {};
  for (const key of FIELDS) {
    const value = typeof input[key] === "string" ? input[key].trim() : "";
    if (value) data[key] = value.slice(0, 2000);
  }

  if (!data.name || !data.phone) {
    return Response.json(
      { ok: false, error: "Please include your name and a phone number." },
      { status: 422 },
    );
  }

  // Honeypot: bots fill hidden fields humans never see.
  if (typeof input.company === "string" && input.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const record = { ...data, receivedAt: new Date().toISOString() };
  console.log("[quote] new request:", JSON.stringify(record));

  // TODO: forward `record` to email/CRM here.

  return Response.json({ ok: true });
}

export function GET() {
  return Response.json(
    { ok: false, error: "Send quote requests with POST." },
    { status: 405 },
  );
}
