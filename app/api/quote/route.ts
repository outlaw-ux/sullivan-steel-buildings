import { Resend } from "resend";

/*
 * Quote request endpoint.
 *
 * Sends the request as an email through Resend when RESEND_API_KEY and
 * QUOTE_TO_EMAIL are set. Without them (e.g. local dev), it logs the request to
 * the server console and still returns success, so the form keeps working.
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

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const QUOTE_TO_EMAIL = process.env.QUOTE_TO_EMAIL;
const QUOTE_CC_EMAIL = process.env.QUOTE_CC_EMAIL;
const QUOTE_FROM_EMAIL =
  process.env.QUOTE_FROM_EMAIL ??
  "Sullivan Steel Buildings <quotes@sullivansteelbuildings.com>";

const list = (value?: string) =>
  value
    ? value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    : undefined;

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

  const body = [
    `Name:     ${data.name}`,
    `Phone:    ${data.phone}`,
    data.email ? `Email:    ${data.email}` : null,
    data.zip ? `ZIP:      ${data.zip}` : null,
    data.buildingType ? `Building: ${data.buildingType}` : null,
    data.size ? `Size:     ${data.size}` : null,
    data.notes ? `\nNotes:\n${data.notes}` : null,
    ``,
    `Source:   ${data.source ?? "site"}`,
    `Received: ${record.receivedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  if (!RESEND_API_KEY || !QUOTE_TO_EMAIL) {
    console.log(
      "[quote] email not configured — request logged only:",
      JSON.stringify(record),
    );
    return Response.json({ ok: true });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: QUOTE_FROM_EMAIL,
      to: list(QUOTE_TO_EMAIL)!,
      cc: list(QUOTE_CC_EMAIL),
      replyTo: data.email || undefined,
      subject: `Quote request — ${data.name}${
        data.buildingType ? `, ${data.buildingType}` : ""
      }`,
      text: body,
    });

    if (error) {
      console.error(
        "[quote] Resend error:",
        error,
        "request:",
        JSON.stringify(record),
      );
      return Response.json(
        {
          ok: false,
          error: "We couldn't send your request just now. Please call us.",
        },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error(
      "[quote] Resend threw:",
      err,
      "request:",
      JSON.stringify(record),
    );
    return Response.json(
      {
        ok: false,
        error: "We couldn't send your request just now. Please call us.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

export function GET() {
  return Response.json(
    { ok: false, error: "Send quote requests with POST." },
    { status: 405 },
  );
}
