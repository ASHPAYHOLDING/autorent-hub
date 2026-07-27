import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Car, ArrowLeft } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "الخدمات" },
  { to: "/features", label: "المزايا" },
  { to: "/pricing", label: "الباقات" },
  { to: "/faq", label: "الأسئلة" },
  { to: "/demo", label: "نموذج موقع" },
  { to: "/contact", label: "تواصل" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border/70 bg-background/80 backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:flex lg:justify-between">
          <Link to="/" className="group flex min-w-0 items-center gap-2.5">
            <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Car className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-xl font-bold leading-none tracking-tight">
                أش<span className="brand-text"> كار</span>
              </span>
              <span className="mt-1 block text-[10px] font-medium text-muted-foreground">
                نظام تأجير السيارات
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1.5 text-sm font-medium text-muted-foreground backdrop-blur-xl lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-full px-3.5 py-2 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-primary/10 text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              to="/pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              ابدأ مجاناً
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            className="shrink-0 rounded-2xl border border-border bg-card/70 p-2.5 backdrop-blur lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-b border-border/70 bg-background/95 backdrop-blur-2xl lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 pb-5 pt-3">
            {links.map((l, i) => (
              <li
                key={l.to}
                className="reveal-static"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-5 py-3.5 text-sm font-bold text-primary-foreground"
              >
                ابدأ تجربتك المجانية
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
