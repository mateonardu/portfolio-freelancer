export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-ink/10 bg-base/70 px-[clamp(20px,5vw,72px)] py-4 backdrop-blur-[12px]">
      <a
        href="#top"
        aria-label="Mateo Narducci — inicio"
        className="ml-[clamp(2px,0.4vw,7px)] inline-block font-syne text-[28px] font-extrabold leading-[25px] tracking-[-0.02em] text-ink no-underline"
      >
        MN
      </a>
      <div className="flex items-center gap-[clamp(14px,2.4vw,30px)]">
        <a
          href="#proyectos"
          className="text-[13px] font-semibold tracking-[0.01em] text-ink/60 transition-colors hover:text-brand"
        >
          Proyectos
        </a>
        <a
          href="#stack"
          className="text-[13px] font-semibold tracking-[0.01em] text-ink/60 transition-colors hover:text-brand"
        >
          Stack
        </a>
        <a
          href="#contacto"
          className="text-[13px] font-semibold tracking-[0.01em] text-ink/60 transition-colors hover:text-brand"
        >
          Contacto
        </a>
      </div>
    </nav>
  )
}
