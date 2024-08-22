import React from 'react'
import AppNavbar from '../../components/AppNavbar/AppNavbar'
import Banner from './Banner/Banner'
import AboutMe from './AboutMe/AboutMe'
import Project from './Project/Project'
import Built from './Built/Built'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <AppNavbar />
      <Banner />
      <AboutMe />
      <Project />
      <Built />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
