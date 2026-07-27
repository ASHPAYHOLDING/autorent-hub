import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-extrabold">
            سيّار<span className="gold-text">اتِك</span>
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            منصة سحابية متكاملة لمكاتب وشركات تأجير السيارات: موقع خاص لكل عميل، إدارة أسطول،
            وحجوزات وعقود إلكترونية.
          </p>
        </div>
        <div>
          <h4 className="font-bold">المنصة</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/features" className="hover:text-primary">
                المزايا
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                باقات الاشتراك
              </Link>
            </li>
            <li>
              <Link to="/demo" className="hover:text-primary">
                نموذج موقع مكتب
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">الدعم</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/contact" className="hover:text-primary">
                تواصل معنا
              </Link>
            </li>
            <li>دعم فني 24/7</li>
            <li>تدريب مجاني للفريق</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">جاهز للانطلاق؟</h4>
          <Link
            to="/pricing"
            className="mt-3 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            اشترك الآن
          </Link>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} سيّاراتِك — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
