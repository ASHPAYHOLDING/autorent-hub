import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Minus, Sparkles, ShieldCheck, Rocket, CreditCard, HelpCircle } from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "الأسعار والباقات | أش كار" },
      {
        name: "description",
        content:
          "باقات شهرية وسنوية لمكاتب وشركات تأجير السيارات: موقع خاص، حجوزات، عقود وفواتير وتقارير — خصم ٢٠٪ سنوياً.",
      },
      { property: "og:title", content: "الأسعار والباقات | أش كار" },
      {
        property: "og:description",
        content: "قارن بين باقات أش كار واختر الأنسب لمكتبك — بدون رسوم إعداد وإلغاء في أي وقت.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

type Plan = {
  name: string;
  monthly: number;
  desc: string;
  popular?: boolean;
  highlight: string;
  features: string[];
  notIncluded?: string[];
};

const plans: Plan[] = [
  {
    name: "البداية",
    monthly: 299,
    desc: "لمكتب صغير يبدأ رحلته الرقمية",
    highlight: "حتى ١٥ سيارة",
    features: [
      "موقع خاص بنطاق فرعي مجاني",
      "إدارة حتى ١٥ سيارة",
      "حجوزات أونلاين وتقويم توفر",
      "عقود إلكترونية بقوالب جاهزة",
      "مستخدمان (٢) وفرع واحد",
      "تقارير أساسية للإيرادات",
      "دعم بالبريد خلال ٢٤ ساعة",
    ],
    notIncluded: ["نطاق خاص باسمك", "مدفوعات إلكترونية", "ربط API"],
  },
  {
    name: "الاحترافية",
    monthly: 599,
    desc: "الأكثر اختياراً للمكاتب النشطة",
    popular: true,
    highlight: "حتى ٦٠ سيارة",
    features: [
      "كل مزايا باقة البداية",
      "نطاق خاص باسم مكتبك",
      "إدارة حتى ٦٠ سيارة",
      "مدفوعات إلكترونية وفواتير ضريبية",
      "١٠ مستخدمين وفرعان",
      "تنبيهات الصيانة والتأمين",
      "تقارير وتحليلات متقدمة",
      "دعم أولوية 24/7 عبر واتساب",
    ],
    notIncluded: ["تطبيق بهوية شركتك", "مدير حساب مخصص"],
  },
  {
    name: "الشركات",
    monthly: 1290,
    desc: "لشركات الأساطيل والفروع المتعددة",
    highlight: "بلا حدود",
    features: [
      "كل مزايا الباقة الاحترافية",
      "سيارات وفروع ومستخدمون بلا حدود",
      "تطبيق جوال بهوية شركتك",
      "ربط API ومزامنة محاسبية",
      "صلاحيات متقدمة وسجل تدقيق",
      "مدير حساب مخصص وتدريب ميداني",
      "اتفاقية مستوى خدمة SLA 99.9٪",
    ],
  },
];

const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: "عدد السيارات", values: ["١٥", "٦٠", "غير محدود"] },
  { label: "عدد الفروع", values: ["١", "٢", "غير محدود"] },
  { label: "عدد المستخدمين", values: ["٢", "١٠", "غير محدود"] },
  { label: "موقع خاص متجاوب", values: [true, true, true] },
  { label: "نطاق خاص باسمك", values: [false, true, true] },
  { label: "حجوزات وعقود إلكترونية", values: [true, true, true] },
  { label: "مدفوعات وفواتير ضريبية", values: [false, true, true] },
  { label: "تنبيهات الصيانة والتأمين", values: [false, true, true] },
  { label: "تقارير متقدمة", values: [false, true, true] },
  { label: "تطبيق بهوية شركتك", values: [false, false, true] },
  { label: "ربط API", values: [false, false, true] },
  { label: "مدير حساب مخصص", values: [false, false, true] },
  { label: "الدعم الفني", values: ["بريد", "أولوية 24/7", "SLA مخصص"] },
];

const perks = [
  { icon: Rocket, t: "١٤ يوم تجربة مجانية", d: "بدون بطاقة ائتمانية وبكل المزايا." },
  { icon: CreditCard, t: "بدون رسوم إعداد", d: "السعر المعلن هو ما تدفعه فقط." },
  { icon: ShieldCheck, t: "بياناتك معزولة", d: "مساحة مستقلة ونسخ احتياطي يومي." },
];

const faqs = [
  {
    q: "هل يمكنني تغيير الباقة لاحقاً؟",
    a: "نعم، الترقية أو التخفيض متاح في أي وقت ويُحتسب الفرق تلقائياً على الفترة المتبقية.",
  },
  {
    q: "ماذا يحدث بعد انتهاء التجربة؟",
    a: "تختار الباقة المناسبة للاستمرار، وتبقى بياناتك محفوظة ٣٠ يوماً إن لم تشترك.",
  },
  {
    q: "هل الأسعار شاملة الضريبة؟",
    a: "الأسعار المعروضة قبل ضريبة القيمة المضافة، وتظهر مفصّلة في الفاتورة.",
  },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="mx-auto h-4 w-4 text-primary" />;
  if (v === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-sm font-bold">{v}</span>;
}

function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <Page>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 right-1/3 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)" }}
        />
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="الأسعار والباقات"
            title="اشترك شهرياً أو سنوياً"
            subtitle="كل الباقات تشمل موقعاً خاصاً معزولاً بالكامل وتحديثات مستمرة بدون رسوم إعداد."
          />

          {/* Billing toggle */}
          <div className="reveal-static mt-9 flex justify-center">
            <div className="glass inline-flex items-center gap-2 rounded-full border border-border/60 p-1.5">
              <button
                onClick={() => setYearly(false)}
                aria-pressed={!yearly}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                  !yearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                شهري
              </button>
              <button
                onClick={() => setYearly(true)}
                aria-pressed={yearly}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 ${
                  yearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                سنوي
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                    yearly ? "bg-primary-foreground/20" : "bg-primary/10 text-primary"
                  }`}
                >
                  وفّر ٢٠٪
                </span>
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((p) => {
              const price = yearly ? Math.round(p.monthly * 0.8) : p.monthly;
              return (
                <div
                  key={p.name}
                  className={`reveal hover-lift relative rounded-4xl p-7 transition-all duration-500 ${
                    p.popular
                      ? "gradient-border glow lg:-translate-y-4"
                      : "glass border border-border/60"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 right-7 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-black text-primary-foreground">
                      <Sparkles className="h-3 w-3" /> الأكثر طلباً
                    </span>
                  )}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-black">{p.name}</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                      {p.highlight}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="gold-text text-5xl font-black tabular-nums transition-all duration-300">
                      {price}
                    </span>
                    <span className="text-sm text-muted-foreground">ريال / شهرياً</span>
                  </div>
                  <p className="mt-1 h-5 text-xs text-muted-foreground">
                    {yearly
                      ? `تُدفع سنوياً ${price * 12} ريال — توفير ${p.monthly * 12 - price * 12} ريال`
                      : "تُدفع شهرياً، إلغاء في أي وقت"}
                  </p>

                  <Link to="/contact" className="mt-6 block">
                    <Button
                      size="lg"
                      variant={p.popular ? "default" : "outline"}
                      className={`w-full rounded-full py-6 font-bold ${p.popular ? "glow glow-pulse" : ""}`}
                    >
                      ابدأ التجربة المجانية
                    </Button>
                  </Link>

                  <ul className="mt-7 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" />
                        </span>
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                    {p.notIncluded?.map((f) => (
                      <li key={f} className="flex items-start gap-2 opacity-55">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="text-muted-foreground line-through">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Perks */}
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {perks.map((p) => (
              <div
                key={p.t}
                className="reveal glass hover-lift flex items-start gap-3 rounded-3xl border border-border/60 p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary/10">
                  <p.icon className="h-5 w-5 text-primary" />
                </span>
                <div>
                  <h3 className="font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-7xl px-5 pb-16">
        <SectionTitle eyebrow="مقارنة" title="المزايا في كل باقة" />
        <div className="glass mt-10 overflow-x-auto rounded-3xl border border-border/60">
          <table className="w-full min-w-[640px] text-right">
            <thead>
              <tr className="border-b border-border/60 bg-secondary/40">
                <th className="p-4 text-sm font-black">الميزة</th>
                {plans.map((p) => (
                  <th key={p.name} className="p-4 text-center text-sm font-black">
                    <span className={p.popular ? "text-primary" : ""}>{p.name}</span>
                    <div className="mt-1 text-xs font-medium text-muted-foreground">
                      {yearly ? Math.round(p.monthly * 0.8) : p.monthly} ريال/شهر
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border/40 transition-colors last:border-0 hover:bg-secondary/30"
                >
                  <td className="p-4 text-sm text-muted-foreground">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      <Cell v={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <SectionTitle eyebrow="أسئلة الأسعار" title="استفسارات متكررة" />
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="glass rounded-2xl border border-border/60 p-5">
              <h3 className="flex items-center gap-2 font-bold">
                <HelpCircle className="h-4 w-4 text-primary" />
                {f.q}
              </h3>
              <p className="mt-2 text-sm leading-8 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border glass mt-12 flex flex-col items-center gap-4 p-10 text-center">
          <h2 className="text-2xl font-black">تحتاج باقة مخصصة؟</h2>
          <p className="max-w-md text-muted-foreground">
            لأساطيل تتجاوز ٥٠٠ سيارة أو متطلبات تكامل خاصة، نصمّم لك عرضاً مناسباً.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow glow-pulse rounded-full px-8 py-6 font-bold">
              اطلب عرض سعر مخصص
            </Button>
          </Link>
        </div>
      </section>
    </Page>
  );
}
