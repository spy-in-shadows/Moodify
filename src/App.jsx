import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">Welcome to Moodify</h1>
          <p className="hero-subtitle">Your personal music streaming experience</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
