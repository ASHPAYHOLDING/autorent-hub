import { Link } from "@tanstack/react-router";
import { Car, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

const platform = [
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "الخدمات" },
  { to: "/features", label: "المزايا" },
  { to: "/pricing", label: "الباقات" },
  { to: "/demo", label: "نموذج موقع مكتب" },
] as const;

const support = [
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/70 bg-surface/70">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Car className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">
                أش<span className="brand-text"> كار</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              منصة سحابية سعودية لمكاتب وشركات تأجير السيارات: موقع خاص لكل مكتب، إدارة أسطول،
              حجوزات وعقود إلكترونية — ببيانات معزولة بالكامل.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> hello@ashcar.sa
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> 920001234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold">المنصة</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {platform.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold">الدعم</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {support.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>دعم فني عربي 24/7</li>
              <li>تدريب مجاني للفريق</li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-6">
            <h4 className="text-base font-bold">جاهز للانطلاق؟</h4>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              فعّل موقع مكتبك ونظامك خلال دقائق، وجرّب مجاناً ١٤ يوماً بدون بطاقة.
            </p>
            <Link
              to="/pricing"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              اشترك الآن
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} أش كار — جميع الحقوق محفوظة · صُنع في المملكة 🇸🇦
      </div>
    </footer>
  );
}
