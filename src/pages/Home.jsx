import React, { useState, useEffect } from 'react'
import { Card, Grid, Slider } from '../components'
import { fetchMoviesData } from '../utils/fetchData'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [posters, setPosters] = useState([])
  useEffect(()=>{
    fetchMoviesData('/trending/movie/week').then(data=>setMovies(data.results))
  }, [])

  useEffect(()=>{
    fetchMoviesData('/trending/movie/day').then(data=>setPosters(data.results))
  }, [])

  console.log(movies);
  return (
    <div className='grid gap-4'>
      <Slider data={posters} />
      <Grid>
        {movies?.map(movie=>(
          <Card key={movie.id} {...movie} />
        ))}
      </Grid>
    </div>
  )
}

export default Home