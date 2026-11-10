import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Direct Tyre Solutions",
  description: "Thanks for your callback request. Our team will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-dark min-h-[60vh] flex items-center justify-center px-4 md:px-8">
        <h1 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight text-center">
          Thank You
        </h1>
      </section>
    </main>
  );
}