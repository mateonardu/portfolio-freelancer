import capturaGeofab from '../assets/captura-geofab.png'
import capturaAura from '../assets/estetica-aura.png'

function BrowserMockup({ url, name, image, dark = false }) {
  return (
    <div
      className={
        dark
          ? 'overflow-hidden rounded-2xl border border-paper/15 bg-[#111] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)]'
          : 'overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_20px_40px_-24px_rgba(10,10,15,0.4)]'
      }
    >
      {/* barra del navegador */}
      <div
        className={
          dark
            ? 'flex items-center gap-2 border-b border-paper/10 bg-[#17171C] px-3.5 py-[11px]'
            : 'flex items-center gap-2 border-b border-ink/10 bg-[#F1F1F4] px-3.5 py-[11px]'
        }
      >
        <span className="h-2.5 w-2.5 rounded-full bg-[#E0483E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E9A93D]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4FA758]" />
        <span
          className={
            dark
              ? 'ml-2 flex-1 rounded-md border border-paper/10 bg-ink px-2.5 py-1 font-mono text-[11px] text-paper/50'
              : 'ml-2 flex-1 rounded-md border border-ink/10 bg-white px-2.5 py-1 font-mono text-[11px] text-ink/50'
          }
        >
          {url}
        </span>
      </div>
      {image ? (
        <img
          src={image}
          alt={`Captura de ${name}`}
          className="block aspect-[16/11] w-full object-cover object-top"
        />
      ) : (
        /* placeholder gris hasta tener screenshot real */
        <div
          className={
            dark
              ? 'flex aspect-[16/11] items-center justify-center bg-[#26262E]'
              : 'flex aspect-[16/11] items-center justify-center bg-[#D9D9DE]'
          }
        >
          <span
            className={
              dark
                ? 'font-anton text-[clamp(20px,2.4vw,32px)] uppercase tracking-[0.02em] text-paper/30'
                : 'font-anton text-[clamp(20px,2.4vw,32px)] uppercase tracking-[0.02em] text-ink/30'
            }
          >
            {name}
          </span>
        </div>
      )}
    </div>
  )
}

function Tag({ children, dark = false }) {
  return (
    <span
      className={
        dark
          ? 'rounded-full border border-paper/20 px-3 py-1.5 font-mono text-xs'
          : 'rounded-full border border-ink/15 px-3 py-1.5 font-mono text-xs'
      }
    >
      {children}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="px-[clamp(20px,5vw,72px)] py-[clamp(48px,7vw,110px)]">
      <div className="mb-[clamp(28px,4vw,52px)] flex items-baseline justify-between gap-4 border-t-[1.5px] border-ink pt-5">
        <h2 className="m-0 font-anton text-[clamp(34px,6vw,84px)] font-normal uppercase leading-[0.9] tracking-[-0.01em]">
          Proyectos
        </h2>
        <span className="whitespace-nowrap font-mono text-xs tracking-[0.08em] text-ink/45">
          02 / TRABAJO REAL
        </span>
      </div>

      <div className="grid gap-[clamp(20px,3vw,40px)]">
        {/* GeoFab */}
        <article className="grid grid-cols-1 items-center gap-[clamp(20px,3vw,44px)] rounded-[22px] border border-ink/10 bg-white p-[clamp(20px,3vw,40px)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_60px_-30px_rgba(59,76,202,0.35)] md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-[18px] flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.08em] text-brand">01</span>
              <span className="h-px flex-1 bg-ink/10" />
              <span className="font-mono text-[11px] text-ink/45">LIVE</span>
            </div>
            <h3 className="mb-1.5 font-anton text-[clamp(30px,4.5vw,58px)] font-normal uppercase leading-[0.92]">
              GeoFab <span className="text-brand">Argentina</span>
            </h3>
            <p className="mb-5 max-w-[440px] text-[15.5px] leading-[1.6] text-ink/70">
              Una empresa de geotextiles vendía solo por teléfono y perdía consultas. Le armé un
              catálogo claro de 7 productos con variantes y un botón de WhatsApp con mensaje
              precargado por producto: el cliente escribe con un toque y ya sabe qué está
              preguntando.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-2">
              <Tag>React</Tag>
              <Tag>Vite</Tag>
              <Tag>Tailwind</Tag>
              <Tag>WhatsApp API</Tag>
            </div>
            <a
              href="https://geofab.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] text-[15px] font-bold text-ink transition-colors hover:text-brand"
            >
              Visitar sitio{' '}
              <span className="font-mono text-xs text-ink/45">geofab.netlify.app</span>{' '}
              <span>↗</span>
            </a>
          </div>
          <BrowserMockup url="geofab.netlify.app" name="GeoFab Argentina" image={capturaGeofab} />
        </article>

        {/* Estética Aura */}
        <article className="grid grid-cols-1 items-center gap-[clamp(20px,3vw,44px)] rounded-[22px] bg-ink p-[clamp(20px,3vw,40px)] text-paper transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_60px_-30px_rgba(59,76,202,0.55)] md:grid-cols-[0.95fr_1.05fr]">
          <BrowserMockup url="auraturnos.vercel.app" name="Estética Aura" image={capturaAura} dark />
          <div>
            <div className="mb-[18px] flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.08em] text-brand-bright">02</span>
              <span className="h-px flex-1 bg-paper/20" />
              <span className="font-mono text-[11px] text-paper/50">TEMPLATE</span>
            </div>
            <h3 className="mb-1.5 font-anton text-[clamp(30px,4.5vw,58px)] font-normal uppercase leading-[0.92]">
              Estética <span className="text-brand-bright">Aura</span>
            </h3>
            <p className="mb-5 max-w-[440px] text-[15.5px] leading-[1.6] text-paper/70">
              Sistema completo de turnos online para centros de estética: el cliente reserva, paga
              la seña por MercadoPago y el turno queda confirmado solo. Panel de admin, webhook de
              MP que valida el pago y agenda sincronizada. Cero WhatsApp de ida y vuelta.
            </p>
            <div className="mb-[22px] flex flex-wrap gap-2">
              <Tag dark>React</Tag>
              <Tag dark>Node · Express</Tag>
              <Tag dark>Prisma · MySQL</Tag>
              <Tag dark>MercadoPago</Tag>
            </div>
            <a
              href="https://auraturnos.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] text-[15px] font-bold text-paper/85 transition-colors hover:text-brand-bright"
            >
              Ver template{' '}
              <span className="font-mono text-xs text-paper/45">auraturnos.vercel.app</span>{' '}
              <span>↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
