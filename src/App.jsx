import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Goals from './components/Goals/Goals'
import Methodology from './components/Methodology/Methodology'
import Results from './components/Results/Results'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Goals />
        <Methodology />
        <Results />
      </main>
      <Footer />
    </div>
  )
}

export default App
