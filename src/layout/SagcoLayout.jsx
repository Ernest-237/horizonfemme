import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SagcoHeader from '../components/sagco/SagcoHeader'
import SagcoFooter from '../components/sagco/SagcoFooter'

export default function SagcoLayout() {
  const { pathname } = useLocation()

  // Scroll to top on route change inside SAGCO
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <SagcoHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SagcoFooter />
    </div>
  )
}