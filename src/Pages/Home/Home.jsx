import React from 'react'
import AppNavbar from '../../components/AppNavbar/AppNavbar'
import Banner from './Banner/Banner'
import AboutMe from './AboutMe/AboutMe'
import Project from './Project/Project'
import Built from './Built/Built'

const Home = () => {
  return (
    <div>
      <AppNavbar />
      <Banner />
      <AboutMe />
      <Project />
      <Built />
    </div>
  )
}

export default Home
