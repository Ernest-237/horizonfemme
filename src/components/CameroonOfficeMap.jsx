import { useMemo } from 'react'

export default function CameroonOfficeMap({
  offices = [],
  activeOffice,
  setActiveOffice,
}) {
  const currentOffice = useMemo(() => {
    return offices.find((office) => office.id === activeOffice?.id) || offices[0]
  }, [offices, activeOffice])

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm md:p-6">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.10),transparent_30%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_50%,#fff7ed_100%)]">
          <svg
            viewBox="0 0 420 640"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <defs>
              <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="12" stdDeviation="18" floodOpacity="0.12" />
              </filter>
            </defs>

            <path
              d="
                M257 22
                L236 42
                L224 69
                L205 96
                L210 138
                L195 183
                L201 225
                L183 270
                L192 312
                L169 356
                L174 404
                L150 458
                L144 521
                L168 593
                L287 598
                L327 539
                L320 472
                L338 416
                L331 362
                L351 304
                L340 248
                L356 194
                L338 138
                L341 91
                L328 57
                L304 32
                L275 19
                Z
              "
              className="fill-sky-100 stroke-sky-200"
              strokeWidth="4"
              filter="url(#mapShadow)"
            />

            <path
              d="
                M257 22
                L236 42
                L224 69
                L205 96
                L210 138
                L195 183
                L201 225
                L183 270
                L192 312
                L169 356
                L174 404
                L150 458
                L144 521
                L168 593
                L287 598
                L327 539
                L320 472
                L338 416
                L331 362
                L351 304
                L340 248
                L356 194
                L338 138
                L341 91
                L328 57
                L304 32
                L275 19
                Z
              "
              fill="none"
              stroke="rgba(59,130,246,0.18)"
              strokeWidth="10"
            />
          </svg>

          {offices.map((office) => {
            const isActive = currentOffice?.id === office.id

            return (
              <button
                key={office.id}
                type="button"
                onMouseEnter={() => setActiveOffice(office)}
                onClick={() => setActiveOffice(office)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 transition ${
                  isActive ? 'scale-110' : 'hover:scale-105'
                }`}
                style={{ left: `${office.x}%`, top: `${office.y}%` }}
                aria-label={`${office.name} - ${office.city}`}
              >
                <span className="relative flex h-14 w-14 items-center justify-center">
                  <span className="absolute inline-flex h-14 w-14 rounded-full bg-orange-500/20 blur-md" />
                  <span
                    className={`relative flex h-11 w-11 items-center justify-center rounded-full border-4 border-white text-sm font-black text-white shadow-lg ${
                      isActive ? 'bg-orange-500' : 'bg-blue-900'
                    }`}
                  >
                    {office.label}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Point sélectionné
          </p>
          <h3 className="mt-3 text-2xl font-black text-slate-900">
            {currentOffice?.name}
          </h3>
          <p className="mt-2 text-base font-semibold text-blue-900">
            {currentOffice?.city} · {currentOffice?.region}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {currentOffice?.address}
          </p>
          <p className="mt-2 text-sm font-medium text-slate-700">
            {currentOffice?.phone}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {offices.map((office) => {
            const isActive = currentOffice?.id === office.id

            return (
              <button
                key={office.id}
                type="button"
                onClick={() => setActiveOffice(office)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? 'border-blue-900 bg-blue-900 text-white'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-blue-300'
                }`}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em]">
                  {office.label}
                </p>
                <p className="mt-2 text-base font-bold">{office.name}</p>
                <p
                  className={`mt-1 text-sm ${
                    isActive ? 'text-blue-100' : 'text-slate-600'
                  }`}
                >
                  {office.city} · {office.short}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}