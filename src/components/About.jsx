export default function About() {
  return (
    <section id="sobremi" className="px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,110px)]">
      <div className="grid grid-cols-1 gap-[clamp(20px,4vw,56px)] border-t-[1.5px] border-ink pt-[clamp(28px,4vw,44px)] md:grid-cols-[0.4fr_1fr]">
        <div>
          <h2 className="m-0 font-anton text-[clamp(30px,4vw,58px)] font-normal uppercase leading-[0.9]">
            Sobre
            <br />
            mí
          </h2>
          <span className="mt-3.5 block font-mono text-xs tracking-[0.08em] text-ink/45">
            04 / QUIÉN SOY
          </span>
        </div>
        <div className="max-w-[640px]">
          <p className="mb-5 text-[clamp(20px,2.6vw,30px)] font-semibold leading-[1.35] tracking-[-0.01em]">
            Tengo 21 años y soy desarrollador web fullstack de Buenos Aires.
          </p>
          <p className="m-0 text-base leading-[1.65] text-ink/70">
            Empecé a programar por curiosidad y terminé construyendo sistemas completos: desde el
            diseño hasta el servidor y la base de datos. Me especializo en webs que resuelven
            problemas reales para negocios, no en plantillas genéricas.
          </p>
        </div>
      </div>
    </section>
  )
}
