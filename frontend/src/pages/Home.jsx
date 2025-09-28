import React from 'react'
import Hero from '../components/Layout/Hero'
import GeneralCollectionSection from '../components/Products/GeneralCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero/>
        <GeneralCollectionSection/>
        <NewArrival/>

        {/* Best Seller Section */}
        <h2 className=' text-3xl text-center font-bold mb-4'>
            Best Seller
        </h2>
        <ProductDetails/>
    </div>
  )
}

export default Home