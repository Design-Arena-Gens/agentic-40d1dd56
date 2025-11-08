export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex flex-col gap-4 px-6 py-10 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nova Spectrum Studio. Crafted in Berlin.</p>
        <div className="flex gap-5">
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
