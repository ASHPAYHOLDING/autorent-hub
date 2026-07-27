import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-bold text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-8 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
