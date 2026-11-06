// UK phone validation shared by the quote forms and /api/quote.
export const PHONE_ERROR = "Please enter a valid UK phone number, e.g. 07955 266 077";

export function normaliseUkPhone(raw: string): string {
  let n = raw.replace(/[\s\-.]/g, "");                 // spaces, dashes, dots
  n = n.replace(/^\+44\(0\)|^0044\(0\)/, "0");          // +44(0)7… -> 07…
  if (n.startsWith("+44")) n = "0" + n.slice(3);
  else if (n.startsWith("0044")) n = "0" + n.slice(4);
  return n.replace(/[()]/g, "");
}

export function isValidUkPhone(raw: string): boolean {
  // Mobiles: 07 + 9 digits. Landlines / 03: 01, 02, 03 + 8–9 digits.
  return /^0(?:7\d{9}|[123]\d{8,9})$/.test(normaliseUkPhone(raw));
}