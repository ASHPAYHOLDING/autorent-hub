import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا | أش كار" },
      {
        name: "description",
        content: "اطلب عرضاً تجريبياً لمنصة أش كار أو تحدث مع فريق المبيعات لتفعيل موقع مكتبك.",
      },
      { property: "og:title", content: "تواصل معنا | أش كار" },
      { property: "og:description", content: "فريقنا جاهز لتفعيل موقع مكتبك خلال يوم واحد." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Page>
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionTitle
          eyebrow="تواصل"
          title="نفعّل موقع مكتبك خلال يوم واحد"
          subtitle="اترك بياناتك ويتواصل معك فريقنا لعرض تجريبي مباشر."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {[
              { icon: Phone, t: "الهاتف", d: "920001234" },
              { icon: Mail, t: "البريد", d: "sales@sayaratik.app" },
              { icon: MessageCircle, t: "واتساب", d: "+966 55 000 1234" },
            ].map((i) => (
              <div key={i.t} className="glass hover-lift reveal flex items-center gap-4 rounded-3xl p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <i.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{i.t}</p>
                  <p className="truncate text-sm text-muted-foreground" dir="ltr">
                    {i.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass reveal space-y-4 rounded-4xl p-7"
          >
            {[
              { id: "name", label: "اسم المكتب أو الشركة", type: "text" },
              { id: "person", label: "اسم المسؤول", type: "text" },
              { id: "phone", label: "رقم الجوال", type: "tel" },
              { id: "email", label: "البريد الإلكتروني", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="mb-1.5 block text-sm font-bold">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  maxLength={120}
                  className="w-full rounded-2xl border border-input bg-secondary px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40"
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="mb-1.5 block text-sm font-bold">
                عدد السيارات ومتطلباتك
              </label>
              <textarea
                id="msg"
                rows={4}
                maxLength={800}
                className="w-full rounded-2xl border border-input bg-secondary px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </div>
            <button
              type="submit"
              className="glow w-full rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              اطلب عرضاً تجريبياً
            </button>
            {sent && (
              <p className="animate-in fade-in flex items-center justify-center gap-2 text-sm font-bold text-primary">
                <CheckCircle2 className="h-4 w-4" /> تم استلام طلبك، سنتواصل معك قريباً.
              </p>
            )}
          </form>
        </div>
      </section>
    </Page>
  );
}
