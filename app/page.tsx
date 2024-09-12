import React from 'react'
import Navbar from './navbar/page'
import Hero from './home/page'
import About from './about/page'
import ProjectsPage from './project/page'
import ContactPage from './contact/page'
import Footer from './footer/page'
const MainPage = () => {
  return (
    <div className='bg-slate-700 h-screen'>


      <div>

        <Navbar />

      </div>

      <div>

        <Hero />

      </div>
      <div>

        <About />

      </div>
      <div>

        <ProjectsPage />

      </div>
      <div>

        <ContactPage />

      </div>
      <div>

        <Footer />

      </div>

    </div>
  )
}

export default MainPage
