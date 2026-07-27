import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Check,
  Shield,
  Clock,
  Headphones,
  Mail,
  Phone,
  Building2,
  Car,
  FileSignature,
  CalendarCheck,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const slides = [
  {
    id: 1,
    badge: "المنصة رقم #1 لإدارة مكاتب التأجير",
    title: "حوّل مكتبك إلى",
    highlight: "منصة رقمية ذكية",
    description:
      "أدر أسطولك، عقودك، وعملائك من مكان واحد. نظام أش كار يوفر لك كل الأدوات التي تحتاجها لنمو عملك بكفاءة عالية.",
    cta: "اطلب تجربة مجانية",
    ctaLink: "/pricing",
    inputType: "email",
    inputPlaceholder: "أدخل بريدك الإلكتروني",
    inputIcon: Mail,
    visual: "dashboard",
  },
  {
    id: 2,
    badge: "تتبع لحظي للأسطول",
    title: "تحكم كامل في",
    highlight: "أسطولك من أي مكان",
    description:
      "حالة كل سيارة لحظياً: متاحة، مؤجرة، صيانة. تنبيهات الاستمارة والتأمين تصلك تلقائياً قبل انتهائها.",
    cta: "احجز عرض السعر الآن",
    ctaLink: "/pricing",
    inputType: "tel",
    inputPlaceholder: "رقم الجوال (05xxxxxxxx)",
    inputIcon: Phone,
    visual: "fleet",
  },
  {
    id: 3,
    badge: "موثقة رقمياً",
    title: "عقود إلكترونية",
    highlight: "وحجوزات فورية",
    description:
      "عقد إيجار موقع رقمياً مع صور الرخصة والهوية. تقويم ذكي يمنع التعارض ويحسب التسعير تلقائياً.",
    cta: "فعّل موقعك الآن",
    ctaLink: "/pricing",
    inputType: "text",
    inputPlaceholder: "اسم المكتب",
    inputIcon: Building2,
    visual: "contract",
  },
];

const trustBadges = [
  { icon: Shield, text: "بيانات معزولة ١٠٠٪" },
  { icon: Clock, text: "إطلاق خلال دقائق" },
  { icon: Headphones, text: "دعم عربي 24/7" },
  { icon: Check, text: "إلغاء في أي وقت" },
];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto animate-float-slow">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold/20 to-gold-soft/10 blur-2xl scale-110" />
      <div className="relative bg-card rounded-3xl shadow-2xl border border-border/60 p-5 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
        <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Car className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-bold">لوحة التحكم</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-muted/50 rounded-2xl p-3 text-center">
              <p className="text-lg font-black text-primary">42</p>
              <p className="text-[10px] text-muted-foreground">سيارة</p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-3 text-center">
              <p className="text-lg font-black text-emerald-500">38</p>
              <p className="text-[10px] text-muted-foreground">متاحة</p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-3 text-center">
              <p className="text-lg font-black text-amber-500">4</p>
              <p className="text-[10px] text-muted-foreground">مؤجرة</p>
            </div>
          </div>
          <div className="h-28 bg-muted/30 rounded-2xl p-4 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-primary/80 to-gold/60 transition-all duration-500"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 bg-muted/50 rounded-full" />
            <div className="h-2.5 w-1/2 bg-muted/30 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FleetMockup() {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto animate-float-slow">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500/10 to-primary/10 blur-2xl scale-110" />
      <div className="relative space-y-4">
        {[
          { name: "كامري 2023", status: "متاحة", color: "bg-emerald-500", icon: Car },
          { name: "سوناتا 2022", status: "مؤجرة", color: "bg-amber-500", icon: Car },
          { name: "لاند كروزر", status: "صيانة", color: "bg-red-500", icon: Car },
        ].map((car, i) => (
          <div
            key={i}
            className="bg-card rounded-2xl shadow-lg border border-border/60 p-4 flex items-center gap-4 transform hover:scale-[1.02] transition-transform"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center">
              <car.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm">{car.name}</p>
              <p className="text-xs text-muted-foreground">رقم اللوحة: {1234 + i}-{String.fromCharCode(65 + i)}</p>
            </div>
            <span className={`${car.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
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
    <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto animate-float-slow">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/15 to-gold/10 blur-2xl scale-110" />
      <div className="relative bg-card rounded-3xl shadow-2xl border border-border/60 p-6 transform rotate-1 hover:rotate-0 transition-transform duration-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm">عقد إيجار إلكتروني</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
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
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground text-sm">المبلغ</span>
            <span className="text-xl font-black text-primary">٤٥٠ ر.س</span>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="flex-1 h-10 rounded-xl bg-muted/50 flex items-center justify-center gap-2">
              <CalendarCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">تسليم</span>
            </div>
            <div className="flex-1 h-10 rounded-xl bg-primary/10 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold">دفع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideVisual({ type }: { type: string }) {
  if (type === "fleet") return <FleetMockup />;
  if (type === "contract") return <ContractMockup />;
  return <DashboardMockup />;
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(() => index);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) setSubmitted(true);
  };

  const slide = slides[current];
  const InputIcon = slide.inputIcon;

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
        {/* Main slider container */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card shadow-soft">
          {/* Slide content */}
          <div className="relative min-h-[720px] sm:min-h-[620px] lg:min-h-[540px]">
            {slides.map((s, index) => {
              const isActive = index === current;
              return (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "opacity-100 translate-x-0 z-10"
                      : direction > 0
                        ? "opacity-0 translate-x-[-40px] z-0"
                        : "opacity-0 translate-x-[40px] z-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="flex h-full flex-col items-center gap-6 p-6 pb-28 sm:gap-10 sm:pb-6 lg:flex-row lg:gap-12 lg:p-14">
                    {/* Text & Form - Right side in RTL */}
                    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
                      <div className="space-y-3 sm:space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                          </span>
                          {s.badge}
                        </span>
                        <h1 className="text-2xl font-black leading-tight sm:text-4xl lg:text-5xl">
                          {s.title}{" "}
                          <span className="gold-text">{s.highlight}</span>
                        </h1>
                        <p className="max-w-lg text-sm leading-7 text-muted-foreground line-clamp-3 sm:text-base sm:line-clamp-none lg:text-lg lg:leading-8">
                          {s.description}
                        </p>
                      </div>

                      {submitted ? (
                        <div className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Sparkles className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-bold">تم استلام طلبك بنجاح</p>
                            <p className="text-sm text-muted-foreground">سنتواصل معك خلال ٢٤ ساعة</p>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 rounded-2xl border border-border/60 bg-surface p-2">
                          <div className="relative flex-1">
                            <InputIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              type={s.inputType}
                              placeholder={s.inputPlaceholder}
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              className="h-12 rounded-xl border-0 bg-transparent pr-10 text-right shadow-none ring-0 focus-visible:ring-1 focus-visible:ring-primary/30"
                              required
                            />
                          </div>
                          <Button
                            type="submit"
                            className="h-12 rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] active:scale-95"
                          >
                            {s.cta}
                            <ArrowLeft className="h-4 w-4" />
                          </Button>
                        </form>
                      )}

                      <div className="hidden sm:flex items-center gap-4 pt-2">
                        <div className="flex -space-x-2 space-x-reverse">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-muted to-muted-foreground/30 text-[10px] font-bold text-white"
                            >
                              {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          انضم لـ <span className="font-bold text-foreground">+500</span> مكتب تأجير
                        </p>
                      </div>
                    </div>

                    {/* Visual - Left side in RTL */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                      <SlideVisual type={s.visual} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation bar — below card on mobile, inside on desktop */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 lg:bottom-6 lg:left-8 lg:right-8 lg:w-auto lg:px-0 lg:py-0">
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/95 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="الشريحة السابقة"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/95 text-muted-foreground shadow-sm backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="الشريحة التالية"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-10 bg-primary"
                      : "w-3 bg-muted-foreground/25 hover:bg-primary/40"
                  }`}
                  aria-label={`الانتقال للشريحة ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sub-features row */}
        <div className="mt-8 grid grid-cols-2 gap-4 px-2 md:grid-cols-4">
          {trustBadges.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-2xl bg-card/60 border border-border/40 p-3 text-sm text-muted-foreground shadow-sm"
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
