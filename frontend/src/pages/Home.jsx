import React from 'react'
import Hero from '../components/Layout/Hero'
import GeneralCollectionSection from '../components/Products/GeneralCollectionSection'
import NewArrival from '../components/Products/NewArrival'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GeneralCollectionSection/>
        <NewArrival/>
    </div>
  )
}

export default Home