import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NewsPage from './pages/NewsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResourcesPage from './pages/ResourcesPage'
import DonatePage from './pages/DonatePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/initiatives" element={<ProjectsPage />} />
        <Route path="/ressources" element={<ResourcesPage />} />
        {/* <Route path="/temoignages" element={<TestimonialsPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/don" element={<DonatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}