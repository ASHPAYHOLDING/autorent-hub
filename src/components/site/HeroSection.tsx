import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Car,
  CalendarCheck,
  FileSignature,
  LayoutDashboard,
  Check,
  Sparkles,
  Phone,
  Building2,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tabs = [
  { id: "dashboard", label: "لوحة التحكم", short: "اللوحة", icon: LayoutDashboard },
  { id: "fleet", label: "إدارة الأسطول", short: "الأسطول", icon: Car },
  { id: "contracts", label: "العقود", short: "العقود", icon: FileSignature },
] as const;

type TabId = (typeof tabs)[number]["id"];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function DashboardPanel() {
  const cars = useCountUp(42, true);
  const bookings = useCountUp(128, true);
  const revenue = useCountUp(86, true);
  const bars = [38, 62, 46, 78, 55, 92, 70];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "سيارة", value: cars, tone: "text-primary" },
          { label: "حجز هذا الشهر", value: bookings, tone: "text-foreground" },
          { label: "نسبة الإشغال", value: `${revenue}%`, tone: "text-accent-foreground" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl border border-border/60 bg-surface/70 p-3 text-center">
            <p className={`font-display text-xl font-bold ${s.tone}`}>{s.value}</p>
            <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border/60 bg-surface/50 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-muted-foreground">إيرادات الأسبوع</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">
            <TrendingUp className="h-3 w-3" /> +18%
          </span>
        </div>
        <div className="flex h-28 items-end justify-between gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 origin-bottom rounded-t-lg bg-[image:var(--gradient-brand)] animate-bar-rise"
              style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FleetPanel() {
  const rows = [
    { name: "تويوتا كامري 2024", plate: "أ ب ج 1234", status: "متاحة", tone: "bg-primary/12 text-primary" },
    { name: "هيونداي سوناتا 2023", plate: "د هـ و 5521", status: "مؤجرة", tone: "bg-accent/25 text-accent-foreground" },
    { name: "لاند كروزر 2024", plate: "ز ح ط 8890", status: "صيانة", tone: "bg-destructive/12 text-destructive" },
  ];
  return (
    <div className="space-y-3">
      {rows.map((r, i) => (
        <div
          key={r.plate}
          className="reveal-static flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/60 p-3 transition-transform hover:translate-x-[-4px]"
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card">
            <Car className="h-5 w-5 text-primary" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{r.name}</p>
            <p className="text-[11px] text-muted-foreground">لوحة: {r.plate}</p>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold ${r.tone}`}>
            {r.status}
          </span>
        </div>
      ))}
      <div className="flex items-center justify-between rounded-2xl border border-dashed border-border px-3 py-2.5 text-[11px] text-muted-foreground">
        <span>تنبيه: انتهاء استمارة سيارتين خلال ٧ أيام</span>
        <Zap className="h-3.5 w-3.5 text-accent-foreground" />
      </div>
    </div>
  );
}

function ContractPanel() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-border/60 bg-surface/60 p-4">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <FileSignature className="h-4 w-4 text-primary" /> عقد إيجار إلكتروني
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-bold text-primary">موثّق</span>
        </div>
        <dl className="space-y-2.5 text-sm">
          {[
            ["العميل", "محمد العتيبي"],
            ["السيارة", "تويوتا كامري 2024"],
            ["المدة", "٣ أيام"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-center justify-between">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="my-3 h-px bg-border" />
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">الإجمالي مع الضريبة</span>
          <span className="font-display text-xl font-bold text-primary">٥١٧ ر.س</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { icon: CalendarCheck, t: "تسليم" },
          { icon: ShieldCheck, t: "تأمين" },
          { icon: Check, t: "دفع" },
        ].map((s) => (
          <div key={s.t} className="flex flex-col items-center gap-1.5 rounded-2xl border border-border/60 bg-card px-2 py-3">
            <s.icon className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-semibold">{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const panels: Record<TabId, React.ReactNode> = {
  dashboard: <DashboardPanel />,
  fleet: <FleetPanel />,
  contracts: <ContractPanel />,
};

export function HeroSection() {
  const [tab, setTab] = useState<TabId>("dashboard");
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [office, setOffice] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (office.trim() && phone.trim()) setSent(true);
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] animate-aurora rounded-full bg-accent/20 blur-3xl" />
        <div
          className="absolute -left-32 top-40 h-[28rem] w-[28rem] animate-aurora rounded-full bg-primary/15 blur-3xl"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* copy */}
          <div className="order-2 space-y-7 lg:order-1">
            <span className="reveal-static inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              منصة سعودية متوافقة مع رؤية ٢٠٣٠
            </span>

            <h1
              className="reveal-static font-display text-[2.1rem] font-bold leading-[1.25] sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              موقع ونظام متكامل
              <br />
              <span className="brand-text">لمكتب تأجير سيّاراتك</span>
            </h1>

            <p
              className="reveal-static max-w-xl text-base leading-8 text-muted-foreground lg:text-lg"
              style={{ animationDelay: "120ms" }}
            >
              اشترك شهرياً أو سنوياً، واحصل خلال دقائق على موقع خاص بمكتبك ونظام يدير الأسطول
              والحجوزات والعقود والفواتير — ببيانات معزولة تماماً عن أي مشترك آخر.
            </p>

            <div
              className="reveal-static flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: "180ms" }}
            >
              <Button
                asChild
                className="h-13 rounded-2xl bg-[image:var(--gradient-brand)] px-7 py-3.5 text-base font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] active:scale-95"
              >
                <Link to="/pricing">
                  ابدأ تجربتك المجانية
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-13 rounded-2xl border-border/70 bg-card/70 px-7 py-3.5 text-base font-bold backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <Link to="/demo">شاهد نموذج موقع مكتب</Link>
              </Button>
            </div>

            {/* quote form */}
            <div className="reveal-static" style={{ animationDelay: "240ms" }}>
              {sent ? (
                <div className="glass flex items-center gap-4 rounded-3xl p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold">تم استلام طلبك بنجاح</p>
                    <p className="text-sm text-muted-foreground">سيتواصل معك فريقنا خلال ٢٤ ساعة</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={submit} className="glass rounded-3xl p-4">
                  <p className="mb-3 text-sm font-semibold">احصل على عرض سعر مخصص لمكتبك</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Building2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        value={office}
                        onChange={(e) => setOffice(e.target.value)}
                        placeholder="اسم المكتب"
                        required
                        className="h-12 rounded-2xl border-border/60 bg-card/70 pr-10 text-right"
                      />
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05xxxxxxxx"
                        required
                        className="h-12 rounded-2xl border-border/60 bg-card/70 pr-10 text-right"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="h-12 rounded-2xl bg-primary px-6 font-bold text-primary-foreground transition-transform hover:scale-[1.03] active:scale-95"
                    >
                      اطلب عرض سعر
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* interactive product preview */}
          <div className="order-1 lg:order-2">
            <div
              ref={cardRef}
              onMouseMove={onMove}
              onMouseLeave={() => setPos({ x: 50, y: 50 })}
              className="reveal-static relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/85 shadow-soft backdrop-blur-2xl transition-transform duration-300 ease-out sm:rounded-[2.5rem]"
              style={{
                transform: `perspective(1200px) rotateX(${(pos.y - 50) * -0.05}deg) rotateY(${(pos.x - 50) * 0.05}deg)`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background: `radial-gradient(520px circle at ${pos.x}% ${pos.y}%, color-mix(in oklab, var(--accent) 26%, transparent), transparent 45%)`,
                }}
              />

              <div className="relative flex items-center justify-between gap-2 border-b border-border/60 px-4 py-3.5 sm:px-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <span className="truncate rounded-full bg-surface px-3 py-1 text-[11px] text-muted-foreground">
                  ashcar.sa/office/nokhba
                </span>
              </div>

              <div className="relative flex gap-2 px-4 pt-4 sm:px-5">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-3 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                      tab === t.id
                        ? "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-glow"
                        : "bg-surface text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <t.icon className="h-4 w-4 shrink-0" />
                    <span className="hidden sm:inline">{t.label}</span>
                    <span className="sm:hidden">{t.short}</span>
                  </button>
                ))}
              </div>

              <div className="relative p-4 sm:p-5">
                <div key={tab} className="reveal-static">
                  {panels[tab]}
                </div>
              </div>
            </div>

            {/* floating chips */}
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-6">
              {[
                { icon: ShieldCheck, t: "بيانات معزولة" },
                { icon: Zap, t: "إطلاق بدقائق" },
                { icon: CalendarCheck, t: "حجوزات فورية" },
                { icon: Check, t: "إلغاء متى شئت" },
              ].map((c, i) => (
                <div
                  key={c.t}
                  className="reveal-static flex items-center gap-2 rounded-2xl border border-border/60 bg-card/70 px-3 py-2.5 text-xs font-medium text-muted-foreground backdrop-blur"
                  style={{ animationDelay: `${300 + i * 60}ms` }}
                >
                  <c.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">{c.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
