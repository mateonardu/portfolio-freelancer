const WHATSAPP_NUMBER = '5491160304306'
const WHATSAPP_MESSAGE = 'Hola Mateo! Vi tu portfolio y quiero hablar sobre un proyecto web.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Contact() {
  return (
    <section
      id="contacto"
      className="px-[clamp(20px,5vw,72px)] pt-[clamp(48px,7vw,110px)] pb-[clamp(60px,8vw,120px)]"
    >
      <div className="relative overflow-hidden rounded-[28px] bg-ink p-[clamp(28px,5vw,72px)] text-paper">
        {/* halo índigo del original */}
        <div className="pointer-events-none absolute -top-[140px] -right-[100px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(59,76,202,0.45),transparent_60%)]" />

        <div className="relative">
          <span className="font-mono text-xs tracking-[0.12em] text-brand-bright">
            05 / CONTACTO
          </span>
          <h2 className="mt-3.5 mb-5 font-anton text-[clamp(38px,6.5vw,92px)] font-normal uppercase leading-[0.88] tracking-[-0.01em]">
            Hablemos
          </h2>
          <p className="mb-7 max-w-[400px] text-base leading-[1.6] text-paper/70">
            ¿Tenés un proyecto en mente? Escribime.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-9 py-[18px] text-[16px] font-bold text-white transition-colors hover:bg-brand-bright"
          >
            Escribime por WhatsApp <span>↗</span>
          </a>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://instagram.com/mateooo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-paper transition-colors hover:text-brand-bright"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-paper/10 font-mono text-sm">
                IG
              </span>
              @mateooo.dev
            </a>
            <a
              href="https://github.com/mateonardu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-semibold text-paper transition-colors hover:text-brand-bright"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-paper/10 font-mono text-sm">
                GH
              </span>
              github.com/mateonardu
            </a>
          </div>
        </div>
      </div>

      <footer className="mt-[clamp(28px,4vw,44px)] flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-ink/50">© 2026 Mateo Narducci — Buenos Aires</span>
        <span className="font-mono text-xs text-ink/50">Hecho a mano, sin plantillas.</span>
      </footer>
    </section>
  )
}
