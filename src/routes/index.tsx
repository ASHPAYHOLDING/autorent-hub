import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  ShieldCheck,
  Gauge,
  CalendarCheck,
  FileSignature,
  Smartphone,
  Users,
  CreditCard,
  BarChart3,
  ArrowLeft,
  Check,
} from "lucide-react";
import heroFleet from "@/assets/hero-fleet.jpg";
import { Page, SectionTitle } from "@/components/site/Page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أش كار | منصة تأجير سيارات SaaS لكل مكتب" },
      {
        name: "description",
        content:
          "اشترك شهرياً أو سنوياً واحصل على موقع خاص بمكتبك لعرض سياراتك مع نظام حجوزات وعقود وإدارة أسطول معزول بالكامل.",
      },
      { property: "og:title", content: "أش كار | منصة تأجير سيارات SaaS" },
      {
        property: "og:description",
        content: "موقع متكامل ونظام إدارة لكل مكتب تأجير سيارات — بيانات معزولة واشتراك مرن.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "+420", label: "مكتب مشترك" },
  { value: "+38 ألف", label: "حجز شهرياً" },
  { value: "99.9%", label: "جاهزية المنصة" },
  { value: "6 دقائق", label: "متوسط إطلاق الموقع" },
];

const features = [
  {
    icon: Globe,
    title: "موقع خاص لكل مكتب",
    text: "نطاق مستقل، هوية بصرية، وصفحات سيارات محسّنة لمحركات البحث خلال دقائق.",
  },
  {
    icon: ShieldCheck,
    title: "عزل كامل للبيانات",
    text: "كل مشترك في مساحة مستقلة تماماً — لا تداخل في السيارات أو العملاء أو الفواتير.",
  },
  {
    icon: Gauge,
    title: "إدارة الأسطول",
    text: "حالة كل سيارة لحظياً: متاحة، مؤجرة، صيانة، مع تنبيهات الاستمارة والتأمين.",
  },
  {
    icon: CalendarCheck,
    title: "حجوزات فورية",
    text: "تقويم ذكي يمنع التعارض ويحسب التسعير اليومي والأسبوعي والشهري تلقائياً.",
  },
  {
    icon: FileSignature,
    title: "عقود إلكترونية",
    text: "عقد إيجار موقّع رقمياً مع صور الرخصة والهوية وتسليم واستلام موثّق.",
  },
  {
    icon: CreditCard,
    title: "مدفوعات ومحاسبة",
    text: "دفع إلكتروني، تأمين مسترد، فواتير ضريبية وتقارير إيرادات جاهزة.",
  },
  {
    icon: Users,
    title: "صلاحيات الفريق",
    text: "أدوار للمدير والموظف والفرع، مع سجل عمليات كامل لكل إجراء.",
  },
  {
    icon: BarChart3,
    title: "تقارير وتحليلات",
    text: "معدل الإشغال، أعلى السيارات ربحاً، وأداء كل فرع في لوحة واحدة.",
  },
  {
    icon: Smartphone,
    title: "متجاوب بالكامل",
    text: "تجربة سلسة على الجوال للعميل والموظف، مع تصميم عربي أصيل من اليمين لليسار.",
  },
];

const steps = [
  { n: "١", t: "اختر باقتك", d: "اشتراك شهري أو سنوي بخصم يصل إلى ٢٠٪." },
  { n: "٢", t: "فعّل موقعك", d: "شعارك وألوانك ونطاقك الخاص خلال دقائق." },
  { n: "٣", t: "أضف سياراتك", d: "صور، أسعار، شروط، وتوفر لحظي." },
  { n: "٤", t: "استقبل الحجوزات", d: "عقود ومدفوعات وتقارير تعمل تلقائياً." },
];

const logos = ["مكتب الخليج", "الرياض ليموزين", "درة السيارات", "أسطول جدة", "النخبة رينت", "سيّار"];

function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--gold) 22%, transparent)" }}
        />
        <div
          className="pointer-events-none absolute top-40 left-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              موقع ونظام متكامل
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.25] sm:text-5xl lg:text-6xl">
              كل ما يحتاجه مكتب
              <br />
              <span className="gold-text">تأجير سيّاراتك</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-muted-foreground">
              اشترك شهرياً أو سنوياً واحصل خلال دقائق على موقع خاص بمكتبك لعرض سياراتك، مع نظام
              حجوزات وعقود ومحاسبة — بمساحة معزولة ١٠٠٪ عن بقية المشتركين.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="glow group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                جرّب مجاناً ١٤ يوم
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/demo"
                className="glass hover-lift inline-flex items-center rounded-full px-7 py-3.5 font-bold"
              >
                شاهد نموذج موقع
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["بدون رسوم إعداد", "إلغاء في أي وقت", "دعم عربي 24/7"].map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal relative">
            <div className="animate-float glass glow overflow-hidden rounded-4xl p-2">
              <img
                src={heroFleet}
                alt="أسطول سيارات فاخرة في معرض حديث"
                width={1600}
                height={1008}
                className="rounded-3xl object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 right-4 rounded-2xl px-5 py-4 sm:right-10">
              <p className="text-xs text-muted-foreground">نسبة الإشغال هذا الشهر</p>
              <p className="gold-text text-2xl font-black">87.4%</p>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden border-y border-border/60 bg-surface py-5">
          <div className="animate-marquee flex w-max gap-14 whitespace-nowrap px-7 text-sm font-bold text-muted-foreground">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="transition-colors hover:text-primary">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass hover-lift reveal rounded-3xl p-6 text-center">
              <p className="gold-text text-3xl font-black">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          eyebrow="كل ما يحتاجه مكتبك"
          title="نظام واحد يدير التأجير من البداية للنهاية"
          subtitle="من عرض السيارة على موقعك الخاص، إلى العقد الإلكتروني والتقرير المالي."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="glass hover-lift reveal group rounded-3xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-border/60 bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow="البداية سهلة" title="من الاشتراك إلى أول حجز في نفس اليوم" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="glass hover-lift reveal rounded-3xl p-6">
                <span className="gold-text text-4xl font-black">{s.n}</span>
                <h3 className="mt-3 font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <div className="glass glow reveal rounded-4xl px-6 py-14 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            جاهز يكون لمكتبك <span className="gold-text">موقعه الخاص؟</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-muted-foreground">
            ابدأ التجربة المجانية اليوم، وانقل حجوزاتك وعقودك إلى نظام واحد منظم.
          </p>
          <Link
            to="/pricing"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            اختر باقتك الآن
          </Link>
        </div>
      </section>
    </Page>
  );
}
