import type { NavItem } from "./SiteNavbar";

type SiteFooterProps = {
  items: NavItem[];
};

const contactInfo = [
  { label: "Phone", value: "+91 83685 73451", href: "tel:+918368573451" },
  {
    label: "Email",
    value: "vipul@bigwigmedia.in",
    href: "mailto:vipul@bigwigmedia.in",
  },
  { label: "Address", value: "Bigwig Media, Delhi, India" },
];

export default function SiteFooter({ items }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#071018] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300 text-sm font-black text-[#061014]">
              U
            </span>
            <div>
              <p className="text-xl font-black">Unifyi</p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                AI Admission Management
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            A centralized AI-powered platform for leads, applications,
            admissions, communication, analytics, and institutional growth.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
            Quick Links
          </p>
          <div className="mt-4 grid gap-2">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-300">
            Contact
          </p>
          <div className="mt-4 grid gap-3">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-sm font-bold text-slate-300 hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-300">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Unifyi. All rights reserved.</p>
        <p>Built for modern educational institutions.</p>
      </div>
    </footer>
  );
}
