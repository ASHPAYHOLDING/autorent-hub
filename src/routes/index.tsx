import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Sparkles,
  Phone,
  Mail,
  Building2,
  User,
  Send,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";
import heroFleet from "@/assets/hero-fleet.jpg";
import { Page, SectionTitle } from "@/components/site/Page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", office: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.phone) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="gradient-border glass flex flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-black">تم استلام طلبك بنجاح</h3>
        <p className="text-muted-foreground">
          فريق أش كار سيتواصل معك خلال ٢٤ ساعة لتقديم عرض السعر المخصص.
        </p>
        <Button variant="outline" className="rounded-full px-6" onClick={() => setSubmitted(false)}>
          إرسال طلب آخر
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="gradient-border glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-black">احصل على عرض سعر مجاني</h3>
          <p className="text-xs text-muted-foreground">رد خلال ساعات، بدون التزام</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs font-bold">
            الاسم
          </Label>
          <div className="relative">
            <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              placeholder="محمد العتيبي"
              className="rounded-xl pr-10"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-xs font-bold">
            الجوال
          </Label>
          <div className="relative">
            <Phone className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              placeholder="05xxxxxxxx"
              className="rounded-xl pr-10"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="office" className="text-xs font-bold">
            اسم المكتب
          </Label>
          <div className="relative">
            <Building2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="office"
              placeholder="مكتب النخبة لتأجير السيارات"
              className="rounded-xl pr-10"
              value={form.office}
              onChange={(e) => setForm({ ...form, office: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <Label htmlFor="email" className="text-xs font-bold">
            البريد الإلكتروني <span className="text-muted-foreground">(اختياري)</span>
          </Label>
          <div className="relative">
            <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@office.com"
              className="rounded-xl pr-10"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="glow glow-pulse mt-5 w-full rounded-full bg-primary py-6 text-base font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        احجز عرض السعر الآن
        <ArrowLeft className="h-4 w-4" />
      </Button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Shield className="h-3.5 w-3.5" />
        بياناتك محمية ولن تُشارك مع أي طرف ثالث
      </p>
    </form>
  );
}

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
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <div className="reveal-static">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              منصة SaaS لتأجير السيارات
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.22] sm:text-5xl lg:text-[3.5rem]">
              موقع ونظام متكامل
              <br />
              <span className="gold-text">لمكتب تأجير سيّاراتك</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-9 text-muted-foreground">
              اشترك شهرياً أو سنوياً واحصل خلال دقائق على موقع خاص بمكتبك لعرض سياراتك، مع نظام
              حجوزات وعقود ومحاسبة — بمساحة معزولة ١٠٠٪ عن بقية المشتركين.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link to="/pricing">
                <Button
                  size="lg"
                  className="glow glow-pulse group rounded-full bg-primary px-8 py-6 text-base font-bold text-primary-foreground transition-transform hover:scale-105"
                >
                  جرّب مجاناً ١٤ يوم
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift rounded-full px-7 py-6 text-base font-bold"
                >
                  شاهد نموذج موقع
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Shield, text: "بيانات معزولة ١٠٠٪" },
                { icon: Clock, text: "إطلاق خلال دقائق" },
                { icon: Headphones, text: "دعم عربي 24/7" },
                { icon: Check, text: "إلغاء في أي وقت" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-3 w-3 text-primary" />
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-static relative lg:justify-self-end">
            <QuoteForm />
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
