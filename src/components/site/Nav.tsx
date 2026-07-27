import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Car } from "lucide-react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/services", label: "الخدمات" },
  { to: "/features", label: "المزايا" },
  { to: "/pricing", label: "الباقات" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/demo", label: "نموذج موقع" },
  { to: "/contact", label: "تواصل" },
] as const;


export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <span className="glow grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Car className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-xl font-extrabold tracking-tight">
            أش<span className="gold-text"> كار</span>
          </span>
        </Link>


        <ul className="hidden items-center gap-5 text-sm lg:gap-6 font-medium text-muted-foreground md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/pricing"
            className="glow inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            ابدأ تجربتك المجانية
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="القائمة"
          className="shrink-0 rounded-xl border border-border p-2 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="animate-in fade-in slide-in-from-top-2 space-y-1 border-t border-border/60 px-5 pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
