import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import MediathequePage from './pages/MediathequePage'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

// === Sous-site SAGCO ===
import SagcoLayout from './layout/SagcoLayout'
import SagcoHomePage from './pages/sagco/SagcoHomePage'
import SagcoAboutPage from './pages/sagco/SagcoAboutPage'
import SagcoActorsPage from './pages/sagco/SagcoActorsPage'
import SagcoContactPage from './pages/sagco/SagcoContactPage'
import SagcoActualitesPage from './pages/sagco/SagcoActualitesPage'
import SagcoRealisationsPage from './pages/sagco/SagcoRealisationsPage'
import SagcoMultimediaPage from './pages/sagco/SagcoMultimediaPage'

export default function App() {
  return (
    <Routes>
      {/* ============================================ */}
      {/*  Sous-site SAGCO (layout indépendant)        */}
      {/* ============================================ */}
      <Route path="/sagco" element={<SagcoLayout />}>
        <Route index element={<SagcoHomePage />} />
        <Route path="a-propos" element={<SagcoAboutPage />} />
        <Route path="acteurs" element={<SagcoActorsPage />} />
        <Route path="actualites" element={<SagcoActualitesPage />} />
        <Route path="realisations" element={<SagcoRealisationsPage />} />
        <Route path="multimedia" element={<SagcoMultimediaPage />} />
        <Route path="contact" element={<SagcoContactPage />} />
      </Route>

      {/* ============================================ */}
      {/*  Site principal Horizons Femmes              */}
      {/* ============================================ */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/initiatives" element={<ProjectsPage />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        <Route path="/mediatheque" element={<MediathequePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/don" element={<DonatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}