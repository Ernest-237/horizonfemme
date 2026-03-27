import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6 lg:px-8">
      <h1 className="text-5xl font-black text-slate-900">404</h1>
      <p className="mt-4 text-lg text-slate-600">Page introuvable.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white"
      >
        Retour à l’accueil
      </Link>
    </section>
  )
}