import { useSiteContent } from '../hooks/useSiteContent'

export default function ProjectsPage() {
  const content = useSiteContent()
  const page = content?.initiativesPage

  if (!page) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Initiatives
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Contenu indisponible
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          La clé <code>initiativesPage</code> est absente ou mal placée dans
          <code> siteContent.js</code>.
        </p>
      </section>
    )
  }

  return (
    <div className="space-y-12 pb-6 md:space-y-16">
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)] text-white">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">
                {page.eyebrow}
              </p>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
                {page.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {page.description}
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="grid gap-4">
                {page.heroStats?.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            {page.featuredTitle}
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            {page.featuredText}
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {page.projects?.map((project) => (
            <article
              key={project.id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-700">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-600">
                  {project.year}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black leading-tight text-slate-900">
                {project.title}
              </h2>

              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
                {project.location}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights?.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-500">
                  Impact
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {page.approachTitle}
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {page.approachText}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.approachItems?.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-slate-50 p-5"
              >
                <h3 className="text-lg font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}