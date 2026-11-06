"use client";

import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { siteConfig3 } from "@/lib/site-data3";
import { SITE_EMAIL } from "@/lib/seo";
import { isValidUkPhone, normaliseUkPhone, PHONE_ERROR } from "@/lib/phone";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactUsPage3() {
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const telHref = `tel:${siteConfig3.phone.replace(/\s/g, "")}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // event.preventDefault();
    // setStatus("submitting");

    // const form = event.currentTarget;
    // const data = new FormData(form);

    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get("phone") ?? "");

    if (!isValidUkPhone(phone)) {
      setPhoneError(PHONE_ERROR);
      (form.elements.namedItem("phone") as HTMLInputElement | null)?.focus();
      return;
    }
    setPhoneError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          // phone: data.get("phone"),
          phone: normaliseUkPhone(phone),
          tyreSize: data.get("tyreSize"),
          details: `${data.get("postcode") ?? ""} ${data.get("message") ?? ""}`.trim(),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="pt-20">
      <section className="bg-primary-dark py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-secondary font-bold tracking-[0.15em] uppercase text-sm mb-3 block">
              Contact Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-black text-white tracking-tight">
              Get In Touch, Any Time
            </h1>
            <p className="text-gray-300 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
              Call us for an immediate response, or send over your details and
              we&apos;ll get back to you with a quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary-dark pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <Reveal className="flex-1 w-full space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <PhoneCall className="h-7 w-7 text-accent" fill="currentColor" strokeWidth={0} />
              </div>
              <div className="pt-1">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  24/7 Emergency Line
                </p>
                <a
                  href={telHref}
                  className="text-3xl font-black text-white hover:text-accent transition-colors tracking-tight block"
                >
                  {siteConfig3.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <MessageCircle className="h-7 w-7 text-accent" />
              </div>
              <div className="pt-1">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/447955266077"
                  className="text-xl font-bold text-white hover:text-accent transition-colors block"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <Mail className="h-7 w-7 text-accent" />
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Email Us
                </p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="text-xl font-bold text-white hover:text-accent transition-colors block"
                >
                  {SITE_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <MapPin className="h-7 w-7 text-accent" />
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Service Area
                </p>
                <p className="text-xl font-bold text-white">
                  Greater Manchester, Cheshire, Lancashire &amp; West Yorkshire
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  See our{" "}
                  <a href="/areas-we-cover" className="text-secondary hover:underline">
                    full coverage directory
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/10">
                <Clock className="h-7 w-7 text-accent" />
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Opening Hours
                </p>
                <p className="text-xl font-bold text-white">24 Hours A Day, Every Day</p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={150} className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
            <div className="bg-primary/60 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
              <h2 className="text-2xl font-black text-white mb-6">Request a Callback</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={17}
                      placeholder="Phone Number"
                      aria-invalid={!!phoneError}
                      aria-describedby={phoneError ? "phone-error" : undefined}
                      onChange={() => phoneError && setPhoneError("")}
                      className={`w-full rounded-xl border ${phoneError ? "border-red-400" : "border-white/15"} bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none`}
                      // className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    />
                    {phoneError && (
                      <p id="phone-error" className="mt-1 text-red-400 text-xs font-semibold">
                        {phoneError}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="tyreSize">
                    Tyre Size (Optional)
                  </label>
                  <input
                    id="tyreSize"
                    name="tyreSize"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="e.g. 205/55 R16"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="postcode">
                    Location / Postcode
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                    placeholder="Your Location"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help?"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-secondary text-primary rounded-xl px-8 py-4 font-bold flex items-center justify-center transition-all duration-300 hover:bg-secondary-hover hover:-translate-y-0.5 min-h-[60px] text-lg mt-2 shadow-md disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Request Callback"}
                </button>
                {status === "success" && (
                  <p className="text-white text-sm font-semibold">
                    Thanks! We&apos;ve received your request and will be in
                    touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm font-semibold">
                    Something went wrong. Please call us directly instead.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
