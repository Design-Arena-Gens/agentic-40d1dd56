const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto flex h-[var(--nav-height)] max-w-6xl items-center justify-between px-6">
        <div className="glass-panel flex items-center gap-3 px-5 py-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="font-display text-lg tracking-wide">Nova Spectrum</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="glass-panel hidden rounded-full px-5 py-2 text-sm font-medium md:inline-flex"
        >
          Start a Project
        </a>
      </div>
    </header>
  );
}
