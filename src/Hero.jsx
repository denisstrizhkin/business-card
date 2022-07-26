import personImg from './assets/person.jpg'
import { MdEmail } from 'react-icons/md'
import { IoSunnySharp } from 'react-icons/io5'
import { IoMoon } from 'react-icons/io5'


const Hero = () => {
  const toggleTheme = () => {
    const bodyEl = document.querySelector('body')
    bodyEl.classList.toggle('theme--light')
    bodyEl.classList.toggle('theme--dark')
  }

  return (
    <section className="hero">
      <img src={personImg} className="hero__profile" />
      <div className="hero-info padding">
        <button id="theme-toggle" onClick={toggleTheme}>
          <IoMoon id="icon-toggle-dark" />
          <IoSunnySharp id="icon-toggle-light" />
        </button>
        <h1 className="hero__fullname">Denis Strizhkin</h1>
        <h2 className="hero__specialty">Fullstack developer</h2>
        <p className="hero__website"><a href="https://strdenis.com">strdenis.com</a></p>
        <button className="hero__email"><MdEmail />Email</button>
      </div>
    </section>
  )
}

export default Hero
