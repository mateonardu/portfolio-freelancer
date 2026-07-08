const stack = [
  { n: '01', name: 'React' },
  { n: '02', name: 'Node.js' },
  { n: '03', name: 'MySQL' },
  { n: '04', name: 'Git' },
]

export default function Stack() {
  return (
    <section id="stack" className="px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,110px)]">
      <div className="mb-[clamp(24px,3vw,44px)] flex items-baseline justify-between gap-4 border-t-[1.5px] border-ink pt-5">
        <h2 className="m-0 font-anton text-[clamp(34px,6vw,84px)] font-normal uppercase leading-[0.9] tracking-[-0.01em]">
          Stack
        </h2>
        <span className="whitespace-nowrap font-mono text-xs tracking-[0.08em] text-ink/45">
          03 / HERRAMIENTAS
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(clamp(150px,22vw,240px),1fr))] gap-px border border-ink/10 bg-ink/10">
        {stack.map((t) => (
          <div
            key={t.n}
            className="flex min-h-[clamp(120px,15vw,168px)] cursor-default flex-col justify-between bg-base px-[clamp(18px,2vw,26px)] py-[clamp(20px,2.4vw,32px)] transition-colors duration-[350ms] hover:bg-brand hover:text-white"
          >
            <span className="font-mono text-xs opacity-55">{t.n}</span>
            <span className="font-anton text-[clamp(22px,2.6vw,34px)] uppercase leading-[0.95] tracking-[-0.01em]">
              {t.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
