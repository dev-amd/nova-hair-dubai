import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOVA HAIR | Advanced Hair Transplant Clinic",
  description: "Natural results, expert surgeons in Dubai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <head>
        {/* Google Translate Init Script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,ar,ru',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        {/* Google Translate Library */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>

      <body className="min-h-screen bg-white text-text-dark">
        {/* Hidden default Google Element */}
        <div id="google_translate_element" style={{ display: "none" }} />
        {children}
      </body>
    </html>
  );
}
