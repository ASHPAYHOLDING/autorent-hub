import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, Users, Rocket, ShieldCheck } from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "من نحن | أش كار" },
      {
        name: "description",
        content:
          "تعرّف على فريق أش كار ورؤيتنا في تمكين مكاتب وشركات تأجير السيارات بموقع ونظام سحابي متكامل.",
      },
      { property: "og:title", content: "من نحن | أش كار" },
      {
        property: "og:description",
        content: "قصتنا ورؤيتنا وقيمنا في بناء منصة تأجير السيارات الأولى عربياً.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { icon: ShieldCheck, t: "الثقة والعزل", d: "بيانات كل مكتب في مساحة مستقلة تماماً مع نسخ احتياطي يومي." },
  { icon: Rocket, t: "السرعة", d: "من التسجيل إلى إطلاق موقعك خلال دقائق، بلا تعقيد تقني." },
  { icon: HeartHandshake, t: "الشراكة", d: "نجاح مكتبك هو مقياس نجاحنا، ودعمنا معك في كل خطوة." },
  { icon: Users, t: "بساطة الاستخدام", d: "واجهة عربية واضحة يفهمها موظف الاستقبال من أول يوم." },
];

const stats = [
  { n: "+٣٢٠", l: "مكتب مشترك" },
  { n: "+٩٥٪", l: "نسبة تجديد الاشتراك" },
  { n: "٢٤/٧", l: "دعم فني عربي" },
  { n: "٩٩.٩٪", l: "جاهزية المنصة" },
];

function About() {
  return (
    <Page>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 right-1/3 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)" }}
        />
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            من نحن
          </span>
          <h1 className="reveal-static mt-5 text-4xl font-black leading-[1.25] sm:text-5xl">
            نبني البنية الرقمية
            <br />
            <span className="gold-text">لقطاع تأجير السيارات</span>
          </h1>
          <p className="mt-5 text-lg leading-9 text-muted-foreground">
            انطلقت «أش كار» من ملاحظة بسيطة: مكاتب التأجير تدير أعمالها بالورق وجداول Excel،
            بينما عملاؤها يبحثون عن الحجز أونلاين. فصنعنا منصة تمنح كل مكتب موقعاً خاصاً به
            ونظام تشغيل متكامل في اشتراك واحد.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-5 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="glass hover-lift rounded-3xl border border-border/60 p-6 text-center">
              <div className="gold-text text-3xl font-black">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="gradient-border glass hover-lift p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </span>
            <h2 className="mt-4 text-2xl font-black">رسالتنا</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              تمكين كل مكتب تأجير — مهما كان حجمه — من امتلاك حضور رقمي احترافي ونظام تشغيل
              يوفّر وقته ويزيد حجوزاته، بتكلفة اشتراك شهري بسيط.
            </p>
          </div>
          <div className="gradient-border glass hover-lift p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </span>
            <h2 className="mt-4 text-2xl font-black">رؤيتنا</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              أن تكون «أش كار» المنصة الأولى لتأجير السيارات في المنطقة العربية، وأن يتم كل
              حجز سيارة عبر نظام رقمي شفاف وسهل.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <SectionTitle eyebrow="قيمنا" title="ما الذي يوجّه قراراتنا" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="reveal glass hover-lift rounded-3xl border border-border/60 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10">
                <v.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-black">{v.t}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>

        <div className="gradient-border glass mt-14 flex flex-col items-center gap-5 p-10 text-center">
          <h2 className="text-2xl font-black sm:text-3xl">جاهز تبدأ مع أش كار؟</h2>
          <p className="max-w-xl text-muted-foreground">
            جرّب المنصة مجاناً ١٤ يوماً بدون بطاقة ائتمانية، وشاهد الفرق من أول أسبوع.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/pricing">
              <Button size="lg" className="glow glow-pulse rounded-full px-8 py-6 font-bold">
                ابدأ التجربة المجانية
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="hover-lift rounded-full px-8 py-6 font-bold">
                تحدّث مع الفريق
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
