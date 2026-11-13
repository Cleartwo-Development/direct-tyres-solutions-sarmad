import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { heroFleetImage } from "@/lib/site-data-v2";

export const metadata: Metadata = {
  title: "Thank You | Direct Tyre Solutions",
  description: "Thanks for your callback request. Our team will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Direct Tyre Solutions fleet of mobile tyre-fitting vans outside the depot at dusk"
            src={heroFleetImage}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-primary-dark/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-5 text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight uppercase">
              Thank <span className="text-secondary">You</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">Thanks for getting in touch. We&rsquo;ve received your message and will get back to you shortly.</p>

            <div className="pt-1">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-primary font-bold rounded-full shadow-lg hover:bg-secondary-hover transition-colors min-h-14 text-sm sm:text-base"
              >
                <Home className="h-5 w-5 shrink-0" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
