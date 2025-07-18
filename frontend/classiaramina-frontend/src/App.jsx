import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Companies from './components/Companies.jsx'
import Services from './components/Services.jsx'
import Jobs from './components/Jobs.jsx'
import Resume from './components/Resume.jsx'
import Pricing from './components/Pricing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Services />
        <Jobs />
        <Resume />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
