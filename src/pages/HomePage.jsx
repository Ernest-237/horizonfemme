import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'

export default function HomePage() {
  const content = useSiteContent()
  const [activeTab, setActiveTab] = useState(content.home.editorialTabs[0].id)

  const activeContent =
    content.home.editorialTabs.find((tab) => tab.id === activeTab) ||
    content.home.editorialTabs[0]

  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
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

          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                {content.home.hero.cardTitle}
              </p>
              <p className="mt-4 text-lg leading-8 text-blue-50">
                {content.home.hero.cardText}
              </p>
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
        <div className="grid gap-6 md:grid-cols-3">
          {content.home.highlights.map((item) => (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-900">
            {content.home.timelineTitle}
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.home.timeline.map((item) => (
              <div key={`${item.year}-${item.text}`} className="rounded-2xl border border-slate-200 p-5">
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