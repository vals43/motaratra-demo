import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Inventory from './pages/Inventory'
import Service from './pages/Service'
import Contact from './pages/Contact'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Timer de 1.8s exactement comme demandé
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      {/* AnimatePresence permet au Loader de s'effacer en douceur (exit animation) */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App