import localFont from "next/font/local";

/**
 * Display font used by the service pages (matches the approved Lovable design).
 * Self-hosted from @fontsource/archivo so builds never depend on downloading it from Google Fonts.
 */
export const archivo = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [
    {
      path: "../../../node_modules/@fontsource/archivo/files/archivo-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../node_modules/@fontsource/archivo/files/archivo-latin-900-normal.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
