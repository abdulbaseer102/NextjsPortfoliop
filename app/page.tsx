import React from 'react'
import Navbar from './navbar/page'
import Hero from './home/page'
import About from './about/page'
import ProjectsPage from './project/page'
const MainPage = () => {
  return (
    <div>


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

    </div>
  )
}

export default MainPage
