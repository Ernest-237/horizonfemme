import { useState } from 'react'
import { useSiteContent } from '../hooks/useSiteContent'

export default function ResourcesPage() {
  const content = useSiteContent()
  const page = content.resourcesPage
  const [activeTab, setActiveTab] = useState('production')

  if (!page) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Ressources
        </p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">
          Contenu indisponible
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          La clé <code>resourcesPage</code> est absente dans <code>siteContent.js</code>.
        </p>
      </section>
    )
  }

  return (
    <div className="space-y-12 pb-6 md:space-y-16">
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6 lg:px-8 lg:pt-14">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)] text-white">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
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

            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <img
                src="/assets/hf/resources/resources-hero.jpg"
                alt="Ressources Horizons Femmes"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-blue-950/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="rounded-[22px] bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                    Centre de ressources
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">
                    Mets ici une image forte liée aux formations, à la documentation
                    ou à une activité de production de contenus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('production')}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              activeTab === 'production'
                ? 'bg-blue-900 text-white'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'
            }`}
          >
            {page.tabs.production}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('multimedia')}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
              activeTab === 'multimedia'
                ? 'bg-blue-900 text-white'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-blue-300'
            }`}
          >
            {page.tabs.multimedia}
          </button>
        </div>
      </section>

      {activeTab === 'production' && (
        <>
          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">
                {page.productionIntro.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {page.productionIntro.text}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {page.featuredDocs.map((doc) => (
                <article
                  key={doc.id}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
                      {doc.fileLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                      {doc.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-600">
                      {doc.description}
                    </p>

                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex rounded-full bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      {doc.actionLabel}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {page.productionSections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-xl font-black text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                  {page.productionDownloadsTitle}
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {page.productionDownloads.map((item) => (
                  <a
                    key={item.title}
                    href={item.path}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col gap-3 rounded-[22px] border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-black text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{item.meta}</p>
                    </div>

                    <span className="inline-flex rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold text-white">
                      Ouvrir
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'multimedia' && (
        <>
          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black text-slate-900">
                {page.multimediaIntro.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {page.multimediaIntro.text}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {page.mediaCards.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="rounded-[32px] bg-blue-900 p-8 text-white md:p-10">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.mediaHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-white/15 bg-white/10 p-5"
                  >
                    <p className="font-semibold leading-7 text-blue-50">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-black text-slate-900">
            {page.usageTitle}
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            {page.usageText}
          </p>
        </div>
      </section>
    </div>
  )
}