import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ProjectsGallery from '../components/ProjectGallery'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />
        <ProjectsGallery />
      </div>
      <Footer />
    </main>
  )
}
