import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const ABOUT_HERO_IMAGE = '/assets/hf/comite-hf.jpg'
const ABOUT_LEADER_IMAGE = '/assets/hf/comite2-hf.jpg'
const ABOUT_BANNER_IMAGE = '/assets/hf/comite3-hf.jpg'
const ABOUT_MAP_IMAGE = '/assets/hf/map.jpg'

export default function AboutPage() {
  const content = useSiteContent()
  const about = content.about

  const partnerLogos =
    about?.partners?.logos || content.home?.partners?.logos || []

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue via-hf-blue/90 to-hf-blue/60" />
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree
            color="#ffffff"
            opacity={0.1}
            className="h-full w-full"
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-24 xl:px-8 xl:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-hf-orange" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                {about.eyebrow}
              </p>
            </div>

            <p className="mt-6 inline-flex w-fit rounded-full border-2 border-hf-orange/40 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              {about.heroBadge}
            </p>

            <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3.2rem]">
              {about.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
              {about.heroText}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#histoire"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark"
              >
                Notre histoire
              </a>

              <a
                href="#values"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
              >
                Nos valeurs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section
        id="histoire"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* TEXTE */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {about.historyTitle}
            </p>

            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Une trajectoire de plus de 20 ans
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {about.historyIntro}
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {about.historyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="space-y-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-slate-200 shadow-sm">
              <img
                src={ABOUT_LEADER_IMAGE}
                alt="Direction Horizons Femmes"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/80 via-hf-blue/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-2xl bg-white/15 p-4 text-white backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">
                    Leadership
                  </p>

                  <p className="mt-2 text-sm font-bold">
                    Un engagement porté par des femmes pionnières
                  </p>
                </div>
              </div>
            </div>

            {/* SPOTLIGHT */}
            <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-7 text-white shadow-lg">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-[200px] w-[200px]">
                <SilhouetteFiligree
                  color="#F4952F"
                  opacity={0.18}
                  className="h-full w-full"
                />
              </div>

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">
                  Mise en lumière
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  {about.storySpotlight.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-200">
                  {about.storySpotlight.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMATIONS CLÉS */}
      <section
        id="vision"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.interactiveTitle}
          </p>

          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Les fondements de l'organisation
          </h2>

          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-hf-orange" />

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.interactiveSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {about.sections.map((section) => (
            <div
              key={section.id}
              className="overflow-hidden rounded-[28px] border-2 border-slate-100 bg-white shadow-sm"
            >
              <div className="h-1 bg-hf-orange" />

              <div className="p-7 md:p-8">
                <h3 className="text-2xl font-black text-hf-blue">
                  {section.title}
                </h3>

                <div className="mt-3 h-0.5 w-12 rounded-full bg-hf-orange" />

                {section.content ? (
                  <p className="mt-5 text-base leading-8 text-slate-700">
                    {section.content}
                  </p>
                ) : null}

                {section.list ? (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((entry) => (
                      <li
                        key={entry}
                        className="rounded-2xl border-l-4 border-hf-orange bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOUVERNANCE */}
      <section
        id="team"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.governanceTitle}
          </p>

          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une gouvernance structurée et transparente
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {about.governance.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
            >
              <h3 className="text-lg font-black text-hf-blue">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-hf-orange transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* BANNIÈRE */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] shadow-lg">
          <img
            src={ABOUT_BANNER_IMAGE}
            alt="Action de terrain Horizons Femmes"
            className="h-[320px] w-full object-cover md:h-[400px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue/95 via-hf-blue/70 to-hf-blue/20" />

          <div className="absolute inset-y-0 left-0 flex max-w-2xl items-center p-6 md:p-12">
            <div className="text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                Notre engagement
              </p>

              <h2 className="mt-3 text-2xl font-black md:text-3xl lg:text-4xl">
                Présents sur le terrain depuis plus de 20 ans
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-100">
                De Yaoundé à Ebolowa, de Douala à Bafoussam,
                Horizons Femmes déploie ses actions au plus
                près des communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISTINCTIONS */}
      <section
        id="honors"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.honorsTitle}
          </p>

          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une reconnaissance institutionnelle constante
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.honorsSubtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {about.honors.map((honor) => (
            <div
              key={honor.title}
              className="rounded-[28px] bg-hf-blue p-7 text-white shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">
                {honor.year}
              </p>

              <h3 className="mt-3 text-2xl font-black">
                {honor.title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />

              <p className="mt-5 text-base leading-8 text-slate-100">
                {honor.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BUREAUX */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.officesTitle}
          </p>

          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une présence territoriale forte
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.officesSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[28px] border-2 border-slate-100 shadow-sm">
            <img
              src={ABOUT_MAP_IMAGE}
              alt="Carte des bureaux"
              className="h-full w-full object-cover"
            />
          </div>

          {/* LISTE */}
          <div className="space-y-4">
            {about.offices.map((office) => (
              <div
                key={office.id}
                className="rounded-[24px] border-2 border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-hf-blue text-sm font-black text-white">
                    {office.label}
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-hf-orange">
                      {office.region}
                    </p>

                    <h3 className="text-lg font-black text-hf-blue">
                      {office.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <p>📍 {office.address}</p>
                  <p>📞 {office.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      {partnerLogos.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">

            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
                Partenaires
              </p>

              <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
                Des partenariats qui renforcent notre action
              </h2>

              <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((item) => (
                <div
                  key={item.alt}
                  className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-hf-orange"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* VALEURS */}
      <section
        id="values"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">

          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[320px] w-[320px]">
            <SilhouetteFiligree
              color="#F4952F"
              opacity={0.18}
              className="h-full w-full"
            />
          </div>

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
              Nos valeurs
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              {about.valuesReminderTitle}
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              {about.valuesReminderText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.valuesReminderList.map((value) => (
                <span
                  key={value}
                  className="rounded-full border-2 border-hf-orange/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}