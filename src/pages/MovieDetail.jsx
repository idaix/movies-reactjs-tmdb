import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetailHeader } from '../components'
import { fetchMoviesData } from '../utils/fetchData'

const MovieDetail = () => {
    const { movieId } = useParams()
    const [movieDetail, setMovieDetail] = useState([])
    useEffect(()=>{
        fetchMoviesData(`movie/${movieId}`).then(data=>setMovieDetail(data))
    }, [movieId])
    console.log(movieDetail);
    return (

    <div>
        <MovieDetailHeader {...movieDetail} />
    </div>
  )
}

export default MovieDetail