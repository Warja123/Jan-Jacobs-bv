import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyUs from './components/WhyUs'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
