import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Page, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "الأسئلة الشائعة | أش كار" },
      {
        name: "description",
        content:
          "إجابات على أكثر الأسئلة تكراراً حول اشتراكات أش كار، الموقع الخاص بكل مكتب، عزل البيانات، الدفع والدعم الفني.",
      },
      { property: "og:title", content: "الأسئلة الشائعة | أش كار" },
      {
        property: "og:description",
        content: "كل ما تريد معرفته عن منصة أش كار لتأجير السيارات قبل الاشتراك.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faq,
});

const groups = [
  {
    title: "الاشتراك والأسعار",
    items: [
      {
        q: "هل توجد تجربة مجانية؟",
        a: "نعم، تحصل على ١٤ يوماً تجربة كاملة بكل المزايا دون الحاجة لبطاقة ائتمانية، ويمكنك الإلغاء في أي وقت.",
      },
      {
        q: "ما الفرق بين الاشتراك الشهري والسنوي؟",
        a: "الاشتراك السنوي يمنحك خصماً يصل إلى ٢٠٪ مقارنة بالشهري، مع نفس المزايا تماماً وأولوية في الدعم.",
      },
      {
        q: "هل يمكنني ترقية باقتي لاحقاً؟",
        a: "بالتأكيد، يمكنك الترقية أو التخفيض في أي وقت ويتم احتساب الفرق تلقائياً على الفترة المتبقية.",
      },
    ],
  },
  {
    title: "الموقع الخاص بالمكتب",
    items: [
      {
        q: "هل أحصل على موقع مستقل باسم مكتبي؟",
        a: "نعم، كل مشترك يحصل على موقع خاص بهويته وشعاره وسياراته، مع نطاق فرعي مجاني وإمكانية ربط نطاقك الخاص.",
      },
      {
        q: "كم يستغرق إطلاق الموقع؟",
        a: "دقائق معدودة. بعد الاشتراك تضيف شعارك وبيانات سياراتك ويصبح الموقع جاهزاً لاستقبال الحجوزات.",
      },
      {
        q: "هل الموقع متجاوب مع الجوال؟",
        a: "نعم، جميع المواقع مصممة بواجهة عربية RTL متجاوبة بالكامل مع الجوال والتابلت والحاسب.",
      },
    ],
  },
  {
    title: "البيانات والأمان",
    items: [
      {
        q: "هل بيانات مكتبي معزولة عن باقي المشتركين؟",
        a: "نعم، كل مشترك يعمل في مساحة بيانات مستقلة تماماً، ولا يمكن لأي مشترك آخر الوصول إلى بياناتك بأي شكل.",
      },
      {
        q: "هل توجد نسخ احتياطية؟",
        a: "نأخذ نسخة احتياطية يومية مشفّرة، ويمكن استرجاع البيانات عند الحاجة عبر الدعم الفني.",
      },
      {
        q: "هل يمكنني تصدير بياناتي إذا ألغيت الاشتراك؟",
        a: "نعم، يمكنك تصدير كامل بيانات السيارات والحجوزات والعقود بصيغة Excel في أي وقت.",
      },
    ],
  },
  {
    title: "التشغيل والدعم",
    items: [
      {
        q: "هل تساعدونني في إدخال بيانات الأسطول؟",
        a: "نعم، فريق الإعداد يساعدك في ترحيل بيانات سياراتك وعملائك مجاناً عند الاشتراك السنوي.",
      },
      {
        q: "ما قنوات الدعم المتاحة؟",
        a: "دعم عربي على مدار الساعة عبر واتساب والبريد الإلكتروني والمحادثة داخل النظام.",
      },
      {
        q: "هل يمكن إضافة موظفين بصلاحيات مختلفة؟",
        a: "نعم، يمكنك إنشاء حسابات للموظفين وتحديد صلاحيات كل حساب حسب مهامه.",
      },
    ],
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass overflow-hidden rounded-2xl border border-border/60 transition-colors hover:border-primary/40">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-right"
      >
        <span className="font-bold">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-8 text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <Page>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)" }}
        />
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            الأسئلة الشائعة
          </span>
          <h1 className="reveal-static mt-5 text-4xl font-black leading-[1.25] sm:text-5xl">
            كل ما تريد معرفته
            <br />
            <span className="gold-text">قبل الاشتراك</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title} className="reveal">
              <SectionTitle title={g.title} />
              <div className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <Item key={it.q} q={it.q} a={it.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="gradient-border glass mt-14 flex flex-col items-center gap-4 p-10 text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10">
            <MessageCircle className="h-7 w-7 text-primary" />
          </span>
          <h2 className="text-2xl font-black">لم تجد إجابتك؟</h2>
          <p className="max-w-md text-muted-foreground">
            فريقنا جاهز للرد على استفساراتك خلال ساعات قليلة.
          </p>
          <Link to="/contact">
            <Button size="lg" className="glow glow-pulse rounded-full px-8 py-6 font-bold">
              تواصل معنا
            </Button>
          </Link>
        </div>
      </section>
    </Page>
  );
}
