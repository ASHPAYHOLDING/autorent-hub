import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "باقات الاشتراك | سيّاراتِك" },
      {
        name: "description",
        content: "باقات شهرية وسنوية لمكاتب وشركات تأجير السيارات: موقع خاص، حجوزات، عقود وتقارير.",
      },
      { property: "og:title", content: "باقات الاشتراك | سيّاراتِك" },
      {
        property: "og:description",
        content: "اختر الباقة المناسبة لمكتبك — خصم حتى ٢٠٪ على الاشتراك السنوي.",
      },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "البداية",
    monthly: 299,
    desc: "لمكتب صغير يبدأ رحلته الرقمية",
    features: ["حتى ١٥ سيارة", "موقع خاص بنطاق فرعي", "حجوزات وعقود إلكترونية", "مستخدمان", "دعم بالبريد"],
  },
  {
    name: "الاحترافية",
    monthly: 599,
    desc: "الأكثر اختياراً للمكاتب النشطة",
    popular: true,
    features: [
      "حتى ٦٠ سيارة",
      "نطاق خاص باسمك",
      "مدفوعات إلكترونية وفواتير ضريبية",
      "١٠ مستخدمين وفرعان",
      "تقارير وتحليلات متقدمة",
      "دعم أولوية 24/7",
    ],
  },
  {
    name: "الشركات",
    monthly: 1290,
    desc: "لشركات الأساطيل والفروع المتعددة",
    features: [
      "سيارات وفروع غير محدودة",
      "تطبيق بهوية شركتك",
      "ربط API ومزامنة محاسبية",
      "مدير حساب مخصص",
      "اتفاقية مستوى خدمة SLA",
    ],
  },
];

function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <Page>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          eyebrow="أسعار واضحة"
          title="اشترك شهرياً أو سنوياً"
          subtitle="كل الباقات تشمل موقعاً خاصاً معزولاً بالكامل، وتحديثات مستمرة بدون رسوم إعداد."
        />

        <div className="reveal mt-8 flex items-center justify-center gap-3">
          <span className={!yearly ? "font-bold" : "text-muted-foreground"}>شهري</span>
          <button
            onClick={() => setYearly((v) => !v)}
            aria-label="تبديل دورة الفوترة"
            className="relative h-8 w-16 rounded-full border border-border bg-secondary transition-colors"
          >
            <span
              className="absolute top-1 h-6 w-6 rounded-full bg-primary transition-all duration-300"
              style={{ right: yearly ? "0.25rem" : "2.25rem" }}
            />
          </button>
          <span className={yearly ? "font-bold" : "text-muted-foreground"}>
            سنوي <span className="text-primary">(وفّر ٢٠٪)</span>
          </span>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? Math.round(p.monthly * 0.8) : p.monthly;
            return (
              <div
                key={p.name}
                className={`glass hover-lift reveal relative rounded-4xl p-7 ${
                  p.popular ? "glow border-primary/50 lg:-translate-y-3" : ""
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground">
                    <Sparkles className="h-3 w-3" /> الأكثر طلباً
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="gold-text text-5xl font-black">{price}</span>
                  <span className="text-sm text-muted-foreground">ريال / شهرياً</span>
                </p>
                {yearly && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    تُدفع سنوياً {price * 12} ريال
                  </p>
                )}
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-bold transition-transform hover:scale-105 ${
                    p.popular
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-secondary text-foreground"
                  }`}
                >
                  ابدأ الآن
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Page>
  );
}
