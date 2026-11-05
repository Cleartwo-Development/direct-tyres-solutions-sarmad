import type { Metadata } from "next";
import { Chivo, Inter, JetBrains_Mono } from "next/font/google";
import Header3 from "@/components/home3/Header3";
import Footer3 from "@/components/home3/Footer3";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const chivo = Chivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const defaultTitle = "Direct Tyre Solutions | 24/7 Mobile Tyre Fitting";
const defaultDescription =
  "Fast, fully insured 24/7 mobile tyre fitting at home, work or roadside across Greater Manchester, Cheshire, Lancashire & West Yorkshire. Call now.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  icons: {
    icon: "/direct-tyre-solutions-icon.webp",
    shortcut: "/direct-tyre-solutions-icon.webp",
    apple: "/direct-tyre-solutions-icon.webp",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Direct Tyre Solutions",
    url: SITE_URL,
    title: defaultTitle,
    description: defaultDescription,
    images: ["/direct-tyre-solutions-logo-wordmark.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/direct-tyre-solutions-logo-wordmark.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${chivo.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KLLHXQJ3');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-surface text-text-main font-sans antialiased overflow-x-hidden selection:bg-secondary selection:text-primary">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLLHXQJ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <OrganizationJsonLd />
        <Header3 />
        {children}
        <Footer3 />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
