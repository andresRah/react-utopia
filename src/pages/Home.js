import React from 'react'
import { Hero } from '../components/Hero'
import { NavBar } from '../components/NavBar'

export const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
      </main>
    </>
  )
}
