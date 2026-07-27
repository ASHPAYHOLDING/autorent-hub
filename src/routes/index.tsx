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
  Quote,
  Star,
} from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";
import { HeroSection } from "@/components/site/HeroSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أش كار | موقع ونظام متكامل لمكتب تأجير سيّاراتك" },
      {
        name: "description",
        content:
          "موقع ونظام متكامل لمكتب تأجير سيّاراتك: اشترك شهرياً أو سنوياً واحصل على موقع خاص بمكتبك مع نظام حجوزات وعقود وإدارة أسطول معزول بالكامل.",
      },
      { property: "og:title", content: "أش كار | موقع ونظام متكامل لمكتب تأجير سيّاراتك" },
      {
        property: "og:description",
        content: "موقع ونظام متكامل لمكتب تأجير سيّاراتك — بيانات معزولة واشتراك مرن.",
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

const bento = [
  {
    icon: Globe,
    title: "موقع خاص لكل مكتب",
    text: "نطاق مستقل، هوية بصرية بألوان مكتبك، وصفحات سيارات محسّنة لمحركات البحث تُطلق خلال دقائق.",
    span: "lg:col-span-2 lg:row-span-1",
    feature: true,
  },
  {
    icon: ShieldCheck,
    title: "عزل كامل للبيانات",
    text: "كل مشترك في مساحة مستقلة — لا تداخل في السيارات أو العملاء أو الفواتير.",
    span: "",
  },
  {
    icon: Gauge,
    title: "إدارة الأسطول",
    text: "حالة كل سيارة لحظياً مع تنبيهات الاستمارة والتأمين والصيانة.",
    span: "",
  },
  {
    icon: CalendarCheck,
    title: "حجوزات فورية",
    text: "تقويم ذكي يمنع التعارض ويحسب التسعير اليومي والأسبوعي والشهري تلقائياً.",
    span: "",
  },
  {
    icon: FileSignature,
    title: "عقود إلكترونية",
    text: "عقد موقّع رقمياً مع صور الرخصة والهوية وتسليم واستلام موثّق بالصور.",
    span: "lg:col-span-2",
    feature: true,
  },
  {
    icon: CreditCard,
    title: "مدفوعات ومحاسبة",
    text: "دفع إلكتروني، تأمين مسترد، وفواتير ضريبية جاهزة.",
    span: "",
  },
  {
    icon: Users,
    title: "صلاحيات الفريق",
    text: "أدوار للمدير والموظف والفرع مع سجل عمليات كامل.",
    span: "",
  },
  {
    icon: BarChart3,
    title: "تقارير وتحليلات",
    text: "معدل الإشغال، أعلى السيارات ربحاً، وأداء كل فرع في لوحة واحدة.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "متجاوب بالكامل",
    text: "تجربة سلسة على الجوال للعميل والموظف بتصميم عربي أصيل من اليمين لليسار.",
    span: "",
  },
];

const steps = [
  { n: "٠١", t: "اختر باقتك", d: "اشتراك شهري أو سنوي بخصم يصل إلى ٢٠٪ دون رسوم تهيئة." },
  { n: "٠٢", t: "فعّل موقعك", d: "شعارك، ألوانك، ونطاقك الخاص جاهزة خلال دقائق." },
  { n: "٠٣", t: "أضف سياراتك", d: "صور، أسعار، شروط، وتوفر لحظي عبر لوحة واحدة." },
  { n: "٠٤", t: "استقبل الحجوزات", d: "عقود ومدفوعات وتقارير تعمل تلقائياً بلا ورق." },
];

const testimonials = [
  {
    name: "فهد الدوسري",
    role: "مدير مكتب النخبة — الرياض",
    text: "خلال أسبوع واحد انتقلنا من دفاتر ورقية إلى نظام كامل. الحجوزات زادت ٣٥٪ لأن الموقع صار يستقبل الطلبات ليلاً ونهاراً.",
  },
  {
    name: "نورة الحربي",
    role: "شريكة في أسطول جدة",
    text: "أكثر شيء أعجبني عزل البيانات وتقارير الإشغال. صرت أعرف أي سيارة تستحق التجديد وأيها يستنزف الصيانة.",
  },
  {
    name: "عبدالله القحطاني",
    role: "المؤسس — درة السيارات",
    text: "العقود الإلكترونية وفّرت علينا ساعات يومياً، والدعم العربي يرد خلال دقائق فعلاً.",
  },
];

const logos = ["مكتب الخليج", "الرياض ليموزين", "درة السيارات", "أسطول جدة", "النخبة رينت", "سيّار"];

function Home() {
  return (
    <Page>
      <HeroSection />

      {/* Logos marquee */}
      <section className="border-y border-border/60 bg-surface/50 py-6">
        <div className="mx-auto max-w-7xl overflow-hidden px-4">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={`${l}-${i}`}
                className="whitespace-nowrap font-display text-lg font-semibold text-muted-foreground/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass hover-lift reveal rounded-3xl p-6 text-center"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="brand-text font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bento features */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
        <SectionTitle
          eyebrow="كل ما يحتاجه مكتبك"
          title="نظام واحد يدير التأجير من البداية للنهاية"
          subtitle="من عرض السيارة على موقعك الخاص، إلى العقد الإلكتروني والتقرير المالي."
        />
        <div className="mt-12 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bento.map((f, i) => (
            <article
              key={f.title}
              className={`group reveal relative overflow-hidden rounded-3xl border border-border/70 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/35 hover:lift ${
                f.feature
                  ? "bg-[image:var(--gradient-glass)] bg-card/85"
                  : "bg-card/70"
              } ${f.span}`}
              style={{ animationDelay: `${(i % 4) * 70}ms` }}
            >
              <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-primary/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 text-lg font-bold">{f.title}</h3>
              <p className="relative mt-2 text-sm leading-7 text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="border-y border-border/60 bg-surface/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="البداية سهلة" title="من الاشتراك إلى أول حجز في نفس اليوم" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal group relative rounded-3xl border border-border/70 bg-card/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/35"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="brand-text font-display text-4xl font-bold">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
                <span className="absolute bottom-6 left-6 h-1.5 w-8 rounded-full bg-primary/20 transition-all duration-500 group-hover:w-16 group-hover:bg-primary/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle
          eyebrow="آراء عملائنا"
          title="مكاتب سعودية تدير أسطولها معنا كل يوم"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="glass hover-lift reveal flex h-full flex-col rounded-3xl p-6"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-sm leading-8 text-muted-foreground">
                {t.text}
              </blockquote>
              <div className="mt-5 flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border/60 pt-4">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-card/85 px-6 py-16 text-center shadow-soft backdrop-blur-2xl sm:px-12">
          <div className="pointer-events-none absolute inset-0 grid-fade opacity-70" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 animate-aurora rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 animate-aurora rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              جاهز يكون لمكتبك <span className="brand-text">موقعه ونظامه الخاص؟</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              ابدأ التجربة المجانية اليوم — بدون بطاقة، وبدون رسوم تهيئة، وبإمكانية الإلغاء في أي وقت.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-8 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                اختر باقتك الآن
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-border/70 bg-card/70 px-8 py-4 font-bold backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                تحدّث مع فريق المبيعات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
