import React from 'react'
import Navbar from './includes/navbar'
import Hero from './sections/Hero'
import Form from './Components/Form'
import Count from './Components/Count'
import LudoBoard from './Components/LudoBoard'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <LudoBoard />
      </main>
    </>
  )
}

export default App