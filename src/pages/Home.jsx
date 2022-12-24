import React, { useState, useEffect } from 'react'
import { Card, Grid, Menu, Slider } from '../components'
import { fetchMoviesData } from '../utils/fetchData'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [posters, setPosters] = useState([])
  const [genres, setGenres] = useState([])
  useEffect(()=>{
    fetchMoviesData('/trending/movie/week').then(data=>setTrendingMovies(data.results))
    fetchMoviesData('/movie/top_rated').then(data=>setTopRatedMovies(data.results))
  }, [])

  useEffect(()=>{
    fetchMoviesData('/trending/movie/day').then(data=>setPosters(data.results))
  }, [])

  useEffect(()=>{
    fetchMoviesData('/genre/movie/list').then(data=>setGenres(data.genres))
  }, [])

  return (
    <div className='grid gap-4'>
      <Menu data={genres} />
      <Slider data={posters} />
      {/* --- Trending --- */}
      <section>
        <h1 className='text-3xl font-bold mb-4'>Trending</h1>
        <Grid>
          {trendingMovies?.map(movie=>(
            <Card key={movie.id} {...movie} />
          ))}
        </Grid>
      </section>
      {/* --- Latest --- */}
      <section>
        <h1 className='text-3xl font-bold mb-4'>Top Rated</h1>
        <Grid>
          {topRatedMovies?.map(movie=>(
            <Card key={movie.id} {...movie} />
          ))}
        </Grid>
      </section>
    </div>
  )
}

export default Home