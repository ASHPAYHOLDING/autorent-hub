import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  CalendarCheck,
  FileSignature,
  Car,
  Wallet,
  BarChart3,
  Smartphone,
  Headphones,
  ArrowLeft,
} from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدماتنا | أش كار" },
      {
        name: "description",
        content:
          "خدمات أش كار: موقع خاص لكل مكتب تأجير، إدارة أسطول، حجوزات، عقود إلكترونية، فوترة وتقارير ودعم فني.",
      },
      { property: "og:title", content: "خدماتنا | أش كار" },
      {
        property: "og:description",
        content: "حزمة خدمات متكاملة تدير مكتب تأجير السيارات من الحجز حتى الفاتورة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Globe,
    t: "موقع إلكتروني خاص",
    d: "موقع متجاوب باسم مكتبك مع نطاق مستقل، يعرض سياراتك وأسعارك ويستقبل الحجوزات مباشرة.",
    points: ["تصميم عربي RTL", "نطاق خاص أو فرعي", "تحسين لمحركات البحث"],
  },
  {
    icon: Car,
    t: "إدارة الأسطول",
    d: "سجل كامل لكل سيارة: الحالة، العداد، التأمين، الصيانة والمخالفات في مكان واحد.",
    points: ["تنبيهات الصيانة", "متابعة التوفر", "أرشيف الصور والوثائق"],
  },
  {
    icon: CalendarCheck,
    t: "نظام الحجوزات",
    d: "تقويم ذكي يمنع التعارض ويحسب السعر تلقائياً حسب المدة والباقة والعروض.",
    points: ["حجز أونلاين", "تسعير تلقائي", "تأكيد بالرسائل"],
  },
  {
    icon: FileSignature,
    t: "العقود الإلكترونية",
    d: "إنشاء عقد التأجير وتوقيعه رقمياً وأرشفته، مع نموذج تسليم واستلام مصوّر.",
    points: ["توقيع رقمي", "قوالب جاهزة", "أرشفة آمنة"],
  },
  {
    icon: Wallet,
    t: "المدفوعات والفوترة",
    d: "استقبال الدفعات أونلاين، إدارة مبلغ التأمين، وإصدار فواتير ضريبية نظامية.",
    points: ["دفع إلكتروني", "تأمين مسترد", "فاتورة ضريبية"],
  },
  {
    icon: BarChart3,
    t: "التقارير والتحليلات",
    d: "لوحة تحكم توضح الإيرادات، نسبة تشغيل الأسطول، وأفضل السيارات أداءً.",
    points: ["تقارير يومية", "نسبة الإشغال", "تصدير Excel"],
  },
  {
    icon: Smartphone,
    t: "تطبيق للموظفين",
    d: "واجهة جوال لتسليم واستلام السيارات وتصوير الحالة ميدانياً دون حاسب.",
    points: ["يعمل على أي جهاز", "تصوير الأضرار", "صلاحيات للموظفين"],
  },
  {
    icon: Headphones,
    t: "الإعداد والدعم",
    d: "نساعدك في رفع بيانات الأسطول وتدريب فريقك، ودعم فني عربي على مدار الساعة.",
    points: ["ترحيل البيانات", "تدريب مجاني", "دعم 24/7"],
  },
];

const steps = [
  { n: "١", t: "اشترك", d: "اختر الباقة المناسبة لحجم مكتبك." },
  { n: "٢", t: "جهّز موقعك", d: "أضف شعارك وسياراتك وأسعارك." },
  { n: "٣", t: "أطلق", d: "موقعك يعمل ويستقبل الحجوزات فوراً." },
];

function Services() {
  return (
    <Page>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}
        />
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            الخدمات
          </span>
          <h1 className="reveal-static mt-5 text-4xl font-black leading-[1.25] sm:text-5xl">
            كل ما يحتاجه مكتبك
            <br />
            <span className="gold-text">في اشتراك واحد</span>
          </h1>
          <p className="mt-5 text-lg leading-9 text-muted-foreground">
            من الموقع الإلكتروني إلى العقود والفواتير والتقارير — خدماتنا مصمّمة خصيصاً لمكاتب
            وشركات تأجير السيارات.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="reveal glass hover-lift rounded-3xl border border-border/60 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10">
                <s.icon className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-4 text-lg font-black">{s.t}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.d}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <SectionTitle eyebrow="كيف نعمل" title="ثلاث خطوات وأنت جاهز" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="gradient-border glass hover-lift p-8 text-center">
              <div className="gold-text text-5xl font-black">{s.n}</div>
              <h3 className="mt-3 text-xl font-black">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <Link to="/pricing">
            <Button size="lg" className="glow glow-pulse group rounded-full px-8 py-6 font-bold">
              شاهد الباقات
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="outline" size="lg" className="hover-lift rounded-full px-8 py-6 font-bold">
              نموذج موقع مكتب
            </Button>
          </Link>
        </div>
      </section>
    </Page>
  );
}
