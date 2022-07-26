import { useState } from 'react'
import './App.scss'
import Footer from './Footer.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'


function App() {
  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const bodyEl = document.querySelector('body')
  console.log(isDarkTheme)
  console.log(isDarkTheme.matches == true)
  if (isDarkTheme.matches == true) {
    bodyEl.classList.add('theme--dark')
  } else {
    bodyEl.classList.add('theme--light')
  }

  return (
    <div className='App'>
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default App
