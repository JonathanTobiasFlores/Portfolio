import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </main>
  )
}
