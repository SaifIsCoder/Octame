import React from 'react'
import HomeCategories from '@/components/home-categories'
import NewCollection from '@/components/new-collection'
import NewWeek from '@/components/new-week'
import OctameCollection from '@/components/octame-collection'
const Home = () => {
  return (
    <div className="">
    <HomeCategories />
    <NewCollection />
    <NewWeek />
    <OctameCollection />
    </div>
  )
}

export default Home
