import { useSiteContent } from '../hooks/useSiteContent'

export default function AboutPage() {
  const content = useSiteContent()

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
        {content.about.eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        {content.about.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        {content.about.description}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Vision</h2>
          <p className="mt-4 leading-7 text-slate-600">{content.about.vision}</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Mission</h2>
          <p className="mt-4 leading-7 text-slate-600">{content.about.mission}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Valeurs</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {content.about.values.map((value) => (
              <li key={value}>• {value}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Groupes cibles</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {content.about.targetGroups.map((group) => (
              <li key={group}>• {group}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}