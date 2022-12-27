import { useEffect, useState } from "react"
import { Card, Grid, SearchFileld } from "../components"
import { fetchMoviesData } from "../utils/fetchData"

const Discover = () => {
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    
    useEffect(()=>{
        // setResult([])
        if(query){
            fetchMoviesData(`search/movie?language=en-US&query=${query}&page=1&include_adult=true`)
            .then(data=>setResult(data.results))
        }else{
            fetchMoviesData('/trending/movie/week').then(data=>setResult(data.results))
        }
    }, [query])

    return (
        <div className="">
            <section className="py-3">
                <SearchFileld setQuery={setQuery} query={query} />
            </section>
            {result.length?(
                <section className="py-3">
                    <h1 className='text-3xl font-bold mb-4 capitalize'>{query} movies</h1>
                    <Grid>
                    {result?.map(movie=>(
                        <Card key={movie.id} {...movie} />
                    ))}
                    </Grid>
                </section>
            ):(
                <div className="text-center"> No movie! </div>
            )}
        </div>
    )
}

export default Discover