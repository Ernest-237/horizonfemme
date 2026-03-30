import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'

const HOME_HERO_IMAGE = '/assets/hf/femme-hf.avif' // <- mets ici ton image hero

export default function HomePage() {
  const content = useSiteContent()
  const [activeTab, setActiveTab] = useState(content.home.editorialTabs[0].id)

  const activeContent =
    content.home.editorialTabs.find((tab) => tab.id === activeTab) ||
    content.home.editorialTabs[0]

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {content.home.hero.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              {content.home.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {content.home.hero.description}
            </p>

            {content.home.hero.secondaryDescription && (
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {content.home.hero.secondaryDescription}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/a-propos"
                className="rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                {content.home.hero.primaryCta}
              </Link>

              <Link
                to="/initiatives"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
              >
                {content.home.hero.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-sm md:p-5">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
              <img
                src={HOME_HERO_IMAGE}
                alt="Horizons Femmes - image hero"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-blue-950/45 to-blue-900/20" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.22),transparent_28%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="max-w-xl rounded-[24px] bg-blue-900/80 p-6 text-white backdrop-blur-md md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                    {content.home.hero.cardTitle}
                  </p>

                  <p className="mt-4 text-lg leading-8 text-blue-50">
                    {content.home.hero.cardText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-3">
            {content.home.editorialTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-slate-50 p-6">
            <p className="text-lg leading-8 text-slate-700">
              {activeContent.content}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.home.highlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            {content.home.newsPreviewTitle}
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            {content.home.newsPreviewText}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {content.home.newsItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-700">
                  {item.category}
                </span>
                <span>{item.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            {content.home.initiativesTitle}
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            {content.home.initiativesText}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.home.initiatives.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900">
              {content.home.impactTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {content.home.impactText}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.home.timeline.map((item) => (
              <div
                key={`${item.year}-${item.text}`}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
                  {item.year}
                </p>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">{content.home.cta.title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-blue-50">
            {content.home.cta.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900">
              {content.home.cta.primary}
            </button>

            <Link
              to="/don"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              {content.home.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}