import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Fuel, Users, Settings2, Star } from "lucide-react";
import { Page } from "@/components/site/Page";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "نموذج موقع مكتب تأجير | أش كار" },
      {
        name: "description",
        content: "شاهد كيف يبدو موقع مكتب تأجير السيارات الخاص بك: عرض السيارات، فلترة وحجز فوري.",
      },
      { property: "og:title", content: "نموذج موقع مكتب تأجير | أش كار" },
      {
        property: "og:description",
        content: "تجربة حية لموقع مكتب تأجير سيارات مبني على منصة أش كار.",
      },
    ],
  }),
  component: Demo,
});

const cars = [
  { name: "تويوتا كامري", cat: "سيدان", price: 180, seats: 5, gear: "أوتوماتيك", fuel: "بنزين", rate: 4.8, emoji: "🚗" },
  { name: "هيونداي سوناتا", cat: "سيدان", price: 165, seats: 5, gear: "أوتوماتيك", fuel: "بنزين", rate: 4.6, emoji: "🚙" },
  { name: "نيسان باترول", cat: "دفع رباعي", price: 520, seats: 7, gear: "أوتوماتيك", fuel: "بنزين", rate: 4.9, emoji: "🚐" },
  { name: "شيفروليه تاهو", cat: "دفع رباعي", price: 480, seats: 7, gear: "أوتوماتيك", fuel: "بنزين", rate: 4.7, emoji: "🛻" },
  { name: "مرسيدس E200", cat: "فاخرة", price: 890, seats: 5, gear: "أوتوماتيك", fuel: "بنزين", rate: 5.0, emoji: "✨" },
  { name: "كيا بيجاس", cat: "اقتصادية", price: 95, seats: 5, gear: "أوتوماتيك", fuel: "بنزين", rate: 4.3, emoji: "🚕" },
];

const cats = ["الكل", "اقتصادية", "سيدان", "دفع رباعي", "فاخرة"];

function Demo() {
  const [cat, setCat] = useState("الكل");
  const [selected, setSelected] = useState<string | null>(null);

  const list = useMemo(() => (cat === "الكل" ? cars : cars.filter((c) => c.cat === cat)), [cat]);

  return (
    <Page>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="glass reveal rounded-4xl p-8">
          <p className="text-xs font-bold text-primary">نموذج تجريبي</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            مكتب <span className="gold-text">النخبة</span> لتأجير السيارات
          </h1>
          <p className="mt-3 max-w-2xl leading-8 text-muted-foreground">
            هكذا سيبدو موقع مكتبك على منصة أش كار — سياراتك فقط، بهويتك، وبيانات معزولة تماماً.
          </p>
        </div>

        <div className="reveal mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground scale-105"
                  : "border border-border bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <article key={c.name} className="glass hover-lift reveal overflow-hidden rounded-3xl">
              <div className="grid h-40 place-items-center bg-surface-2 text-6xl">{c.emoji}</div>
              <div className="p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <h2 className="truncate text-lg font-bold">{c.name}</h2>
                  <span className="flex shrink-0 items-center gap-1 text-sm text-primary">
                    <Star className="h-4 w-4 fill-current" /> {c.rate}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{c.cat}</p>
                <ul className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <li className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {c.seats} مقاعد
                  </li>
                  <li className="flex items-center gap-1">
                    <Settings2 className="h-4 w-4" /> {c.gear}
                  </li>
                  <li className="flex items-center gap-1">
                    <Fuel className="h-4 w-4" /> {c.fuel}
                  </li>
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <p>
                    <span className="gold-text text-2xl font-black">{c.price}</span>
                    <span className="text-xs text-muted-foreground"> ريال / يوم</span>
                  </p>
                  <button
                    onClick={() => setSelected(c.name)}
                    className="rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                  >
                    احجز
                  </button>
                </div>
                {selected === c.name && (
                  <p className="animate-in fade-in slide-in-from-bottom-2 mt-4 rounded-2xl border border-primary/40 bg-primary/10 p-3 text-center text-xs font-bold text-primary">
                    تم إرسال طلب الحجز — سيتواصل معك المكتب خلال دقائق (عرض تجريبي)
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Page>
  );
}
