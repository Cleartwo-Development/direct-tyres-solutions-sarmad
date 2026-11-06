"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import Reveal from "../Reveal";
import { heroImageV2, siteConfigV2 } from "@/lib/site-data-v2";
import { isValidUkPhone, normaliseUkPhone, PHONE_ERROR } from "@/lib/phone";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteContact2() {
  const [status, setStatus] = useState<Status>("idle");
  const [phoneError, setPhoneError] = useState("");
  const telHref = `tel:${siteConfigV2.phone.replace(/\s/g, "")}`;

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
    <section className="bg-[#0b1e3d] py-24 relative overflow-hidden scroll-mt-24" id="contact">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <Image
          alt=""
          src={heroImageV2}
          fill
          sizes="50vw"
          className="object-contain object-right-top scale-150 -translate-y-1/4"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <Reveal className="flex-1 space-y-8 text-white">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Get A Quote.
              </h2>
              <p className="text-gray-400 mt-4 text-lg max-w-md leading-relaxed">
                Need new tyres or emergency assistance? Contact us now for an
                immediate response and a competitive price. We&apos;re ready
                24/7.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 bg-[#0b1e3d] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-[#0058f7]/50 group-hover:bg-[#0058f7]/10">
                  <PhoneCall className="h-7 w-7 text-[#0058f7]" fill="currentColor" strokeWidth={0} />
                </div>
                <div className="pt-1">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    24/7 Emergency Line
                  </p>
                  <a
                    href={telHref}
                    className="text-3xl font-black text-white hover:text-[#0058f7] transition-colors tracking-tight block"
                  >
                    {siteConfigV2.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 bg-[#0b1e3d] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-[#0058f7]/50 group-hover:bg-[#0058f7]/10">
                  <Mail className="h-7 w-7 text-[#0058f7]" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    Email Us
                  </p>
                  <a
                    href={`mailto:${siteConfigV2.email}`}
                    className="text-xl font-bold text-white hover:text-[#0058f7] transition-colors block"
                  >
                    {siteConfigV2.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 bg-[#0b1e3d] rounded-2xl flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:border-[#0058f7]/50 group-hover:bg-[#0058f7]/10">
                  <MapPin className="h-7 w-7 text-[#0058f7]" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    Service Area
                  </p>
                  <p className="text-xl font-bold text-white">{siteConfigV2.serviceArea}</p>
                  <p className="text-gray-400 text-sm mt-1">{siteConfigV2.areasCovered}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={200} className="flex-1 w-full max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10">
              <h3 className="text-2xl font-black text-white mb-6">Request a Callback</h3>
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
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#0058f7] focus:border-transparent transition-all outline-none"
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
                      className={`w-full rounded-xl border ${phoneError ? "border-red-400" : "border-white/15"} bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#0058f7] focus:border-transparent transition-all outline-none`}
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#0058f7] focus:border-transparent transition-all outline-none"
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#0058f7] focus:border-transparent transition-all outline-none"
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
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#0058f7] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help?"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#0058f7] text-white rounded-xl px-8 py-4 font-semibold flex items-center justify-center transition-all duration-300 hover:bg-[#0046c4] hover:shadow-[0_4px_14px_0_rgba(0,88,247,0.39)] hover:-translate-y-0.5 min-h-[60px] text-lg mt-2 shadow-md disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Get My Quote"}
                </button>
                {status === "success" && (
                  <p className="text-[#5b9bff] text-sm font-semibold">
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
      </div>
    </section>
  );
}
