import { createFileRoute } from "@tanstack/react-router";
import {
  Globe,
  ShieldCheck,
  Gauge,
  CalendarCheck,
  FileSignature,
  CreditCard,
  Bell,
  MapPin,
  Languages,
} from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "مزايا المنصة | سيّاراتِك" },
      {
        name: "description",
        content:
          "تعرّف على مزايا منصة سيّاراتِك: موقع خاص لكل مكتب، عزل بيانات، حجوزات، عقود إلكترونية وتقارير.",
      },
      { property: "og:title", content: "مزايا المنصة | سيّاراتِك" },
      {
        property: "og:description",
        content: "نظام تأجير سيارات متكامل بواجهة عربية متجاوبة وتفاعلية.",
      },
    ],
  }),
  component: Features,
});

const groups = [
  {
    title: "موقعك الخاص",
    items: [
      { icon: Globe, t: "نطاق مستقل", d: "اربط نطاقك أو استخدم نطاقاً فرعياً مجانياً." },
      { icon: Languages, t: "عربي/إنجليزي", d: "واجهة ثنائية اللغة مع دعم RTL كامل." },
      { icon: MapPin, t: "صفحات الفروع", d: "خريطة ومواعيد عمل لكل فرع." },
    ],
  },
  {
    title: "تشغيل يومي",
    items: [
      { icon: CalendarCheck, t: "تقويم الحجوزات", d: "منع التعارض وتسعير تلقائي حسب المدة." },
      { icon: Gauge, t: "حالة الأسطول", d: "متابعة العدادات والصيانة الدورية." },
      { icon: Bell, t: "تنبيهات ذكية", d: "انتهاء التأمين، تأخر التسليم، ومخالفات." },
    ],
  },
  {
    title: "مالية وحماية",
    items: [
      { icon: FileSignature, t: "عقود موقّعة", d: "توقيع رقمي وأرشفة آمنة لكل عقد." },
      { icon: CreditCard, t: "مدفوعات وفواتير", d: "دفع أونلاين، تأمين مسترد، فاتورة ضريبية." },
      { icon: ShieldCheck, t: "عزل وخصوصية", d: "بيانات كل مشترك في مساحة مستقلة ونسخ احتياطي يومي." },
    ],
  },
];

function Features() {
  return (
    <Page>
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          eyebrow="المزايا"
          title="كل أداة يحتاجها مكتب التأجير الحديث"
          subtitle="مصمّمة للسوق العربي: واجهة من اليمين لليسار، فواتير ضريبية، وتجربة سريعة على الجوال."
        />

        <div className="mt-14 space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="reveal mb-5 text-xl font-extrabold">
                <span className="gold-text">{g.title}</span>
              </h3>
              <div className="grid gap-5 md:grid-cols-3">
                {g.items.map((i) => (
                  <article key={i.t} className="glass hover-lift reveal group rounded-3xl p-6">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary transition-transform group-hover:rotate-6">
                      <i.icon className="h-6 w-6" />
                    </span>
                    <h4 className="mt-4 font-bold">{i.t}</h4>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{i.d}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}
