import React from 'react'
import { Card, Grid, Slider } from '../components'

const Home = () => {
  return (
    <div className='grid gap-4'>
      <Slider />
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  )
}

export default Home