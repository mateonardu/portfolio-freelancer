export default function Hero() {
  return (
    <header className="relative px-[clamp(20px,5vw,72px)] pt-[clamp(28px,5vw,60px)] pb-[clamp(40px,6vw,80px)]">
      <div className="relative">
        <a
          href="#contacto"
          aria-label="Hablemos"
          className="absolute top-[clamp(4px,1vw,8px)] right-0 z-5 flex h-[clamp(64px,9vw,104px)] w-[clamp(64px,9vw,104px)] animate-float items-center justify-center rounded-full border-2 border-ink text-[clamp(26px,4vw,44px)] leading-none text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
        >
          ↗
        </a>

        <h1 className="m-0 font-anton font-normal uppercase leading-[0.86] tracking-[-0.01em]">
          <span className="block text-[clamp(52px,13vw,180px)] text-ink">Desarrollo</span>
          <span className="block text-[clamp(52px,13vw,180px)] text-ink">webs que</span>
          <span className="block text-[clamp(52px,13vw,180px)] text-brand">venden solas</span>
        </h1>

        <div className="mt-[clamp(28px,4vw,52px)] flex flex-wrap items-end justify-between gap-7">
          <div className="max-w-[520px]">
            <p className="mb-[22px] text-[clamp(16px,2vw,20px)] font-medium leading-[1.5] text-ink/70">
              Fullstack dev en Buenos Aires. Convierto negocios sin presencia digital en webs
              rápidas, propias y hechas para conseguir clientes — no plantillas de Wix.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-[9px] rounded-full bg-ink px-[26px] py-[15px] text-[15px] font-bold text-white transition-colors hover:bg-brand"
              >
                Ver proyectos <span>↓</span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-[9px] rounded-full border-[1.5px] border-ink/20 bg-transparent px-[26px] py-[15px] text-[15px] font-bold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Hablemos
              </a>
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs leading-[1.7] tracking-[0.06em] text-ink/50">
              MATEO NARDUCCI
              <br />
              FULLSTACK · BUENOS AIRES
              <br />
              <span className="text-brand">DISPONIBLE PARA PROYECTOS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
