import { useState, useRef } from "react";
import {
  ArrowLeft,
  Check,
  Shield,
  Clock,
  Headphones,
  Phone,
  User,
  Car,
  FileSignature,
  CalendarCheck,
  Sparkles,
  LayoutDashboard,
  List,
  FileText,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const trustBadges = [
  { icon: Shield, text: "بيانات معزولة ١٠٠٪" },
  { icon: Clock, text: "إطلاق خلال دقائق" },
  { icon: Headphones, text: "دعم عربي 24/7" },
  { icon: Check, text: "إلغاء في أي وقت" },
];

const tabs = [
  { id: "dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
  { id: "fleet", label: "إدارة الأسطول", icon: List },
  { id: "contracts", label: "العقود الإلكترونية", icon: FileText },
];

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] animate-float-slow sm:max-w-md">
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-gold/20 to-gold-soft/10 blur-2xl" />
      <div className="relative transform rounded-3xl border border-border/60 bg-card p-5 shadow-2xl transition-transform duration-700 hover:rotate-0 -rotate-2">
        <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10">
              <Car className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-bold">لوحة التحكم</span>
          </div>
          <div className="flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-destructive" />
            <div className="h-2 w-2 rounded-full bg-amber-500" />
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-muted/50 p-3 text-center">
              <p className="text-lg font-black text-primary">42</p>
              <p className="text-[10px] text-muted-foreground">سيارة</p>
            </div>
            <div className="rounded-2xl bg-muted/50 p-3 text-center">
              <p className="text-lg font-black text-emerald-500">38</p>
              <p className="text-[10px] text-muted-foreground">متاحة</p>
            </div>
            <div className="rounded-2xl bg-muted/50 p-3 text-center">
              <p className="text-lg font-black text-amber-500">4</p>
              <p className="text-[10px] text-muted-foreground">مؤجرة</p>
            </div>
          </div>
          <div className="flex h-28 items-end justify-between gap-2 rounded-2xl bg-muted/30 p-4">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-primary/80 to-gold/60 transition-all duration-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-muted/50" />
            <div className="h-2.5 w-1/2 rounded-full bg-muted/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FleetMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] animate-float-slow sm:max-w-md">
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-emerald-500/10 to-primary/10 blur-2xl" />
      <div className="relative space-y-4">
        {[
          { name: "كامري 2023", status: "متاحة", color: "bg-emerald-500/15 text-emerald-700", icon: Car },
          { name: "سوناتا 2022", status: "مؤجرة", color: "bg-amber-500/15 text-amber-700", icon: Car },
          { name: "لاند كروزر", status: "صيانة", color: "bg-red-500/15 text-red-700", icon: Car },
        ].map((car, i) => (
          <div
            key={i}
            className="flex transform items-center gap-4 rounded-2xl border border-border/60 bg-card p-4 shadow-lg transition-transform hover:scale-[1.02]"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/50">
              <car.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{car.name}</p>
              <p className="text-xs text-muted-foreground">رقم اللوحة: {1234 + i}-{String.fromCharCode(65 + i)}</p>
            </div>
            <span className={`rounded-full px-3 py-1.5 text-xs font-bold ${car.color}`}>
              {car.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContractMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] animate-float-slow sm:max-w-md">
      <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-primary/15 to-gold/10 blur-2xl" />
      <div className="relative transform rounded-3xl border border-border/60 bg-card p-6 shadow-2xl transition-transform duration-700 hover:rotate-0 rotate-1">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSignature className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold">عقد إيجار إلكتروني</span>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-bold text-emerald-600">
            موثق
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">العميل</span>
            <span className="font-bold">محمد العتيبي</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">السيارة</span>
            <span className="font-bold">كامري 2023</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">المدة</span>
            <span className="font-bold">3 أيام</span>
          </div>
          <div className="h-px bg-border/60" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">المبلغ</span>
            <span className="text-xl font-black text-primary">٤٥٠ ر.س</span>
          </div>
          <div className="mt-4 flex gap-3">
            <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-muted/50">
              <CalendarCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold">تسليم</span>
            </div>
            <div className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-primary/10">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold">دفع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  dashboard: <DashboardMockup />,
  fleet: <FleetMockup />,
  contracts: <ContractMockup />,
};

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Animated ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl animate-aurora" />
        <div className="absolute top-1/2 -right-24 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl animate-aurora" style={{ animationDelay: "-8s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Text & action column */}
          <div className="order-2 space-y-6 lg:order-1 lg:space-y-8">
            <div className="reveal-static space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-primary" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                المنصة رقم #1 لإدارة مكاتب التأجير
              </span>
              <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                موقع ونظام متكامل
                <br />
                <span className="gold-text">لمكتب تأجير سيّاراتك</span>
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground lg:text-lg lg:leading-8">
                أدر أسطولك، عقودك، وعملائك من مكان واحد. نظام أش كار يمنحك موقعاً خاصاً معزولاً بالكامل،
                وحجوزات فورية، وعقود إلكترونية موثقة.
              </p>
            </div>

            <div className="reveal-static flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.15s" }}>
              <Button
                asChild
                className="h-12 rounded-xl bg-primary px-7 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Link to="/pricing">
                  اطلب تجربة مجانية
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-border/70 bg-background/80 px-7 font-bold backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <Link to="/pricing">شاهد الباقات</Link>
              </Button>
            </div>

            {/* Quote mini-form */}
            <div className="reveal-static" style={{ animationDelay: "0.3s" }}>
              {submitted ? (
                <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">تم استلام طلبك بنجاح</p>
                    <p className="text-sm text-muted-foreground">سيتواصل معك فريق المبيعات خلال ٢٤ ساعة</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleQuote}
                  className="glass rounded-2xl p-4"
                >
                  <p className="mb-3 text-sm font-bold">احصل على عرض سعر مخصص لمكتبك</p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="اسم المكتب"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 rounded-xl border-0 bg-transparent pr-10 text-right shadow-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/30"
                        required
                      />
                    </div>
                    <div className="relative flex-1">
                      <Phone className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="رقم الجوال (05xxxxxxxx)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="h-11 rounded-xl border-0 bg-transparent pr-10 text-right shadow-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/30"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="h-11 rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
                    >
                      طلب عرض سعر
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Interactive product preview */}
          <div className="order-1 lg:order-2">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="reveal-static relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/80 shadow-soft backdrop-blur-xl transition-transform duration-200 ease-out"
              style={{
                animationDelay: "0.2s",
                transform: `perspective(1000px) rotateX(${(mousePos.y - 50) * -0.04}deg) rotateY(${(mousePos.x - 50) * 0.04}deg)`,
              }}
            >
              {/* Mouse-follow glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, color-mix(in oklab, var(--gold) 28%, transparent), transparent 40%)`,
                }}
              />

              {/* Tabs */}
              <div className="relative flex gap-2 border-b border-border/60 p-4 sm:p-5">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition-all duration-300 sm:px-4 sm:text-sm ${
                      activeTab === t.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <t.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{t.label}</span>
                    <span className="sm:hidden">{t.id === "contracts" ? "العقود" : t.label.split(" ").pop()}</span>
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="relative p-6 sm:p-10">
                <div key={activeTab} className="reveal-static">
                  {mockups[activeTab]}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-12 grid grid-cols-2 gap-4 px-2 md:grid-cols-4">
          {trustBadges.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-2xl border border-border/40 bg-card/60 p-3 text-sm text-muted-foreground shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-4 w-4 text-primary" />
              </span>
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
