const BASE_URL = 'https://image.tmdb.org/t/p/'
const MovieDetailHeader = ({ backdrop_path, poster_path, title, overview, genres, vote_average, tagline }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5">
        <div className="w-full relative rounded overflow-hidden md:col-span-2">
            {backdrop_path&&
                <img src={`${BASE_URL}original/${backdrop_path}`} alt={title} />
            }
        </div>
        <div className="">
            <div className="shadow w-36 rounded overflow-hidden">
                {poster_path&&
                    <img src={`${BASE_URL}w500/${poster_path}`} alt={title} />
                }
            </div>
            <div>
                <h2 className="text-3xl text-white font-semibold py-2">{title}</h2>
                <p className="text-gray-400 text-sm">{tagline}</p>
                <h3>Overview</h3>
                <p className="text-gray-400 text-sm">{overview}</p>
                <ul className="flex flex-wrap gap-1 py-2">
                    {genres?.map(item=>(
                        <li key={item?.id} className="bg-primary/40 px-3 py-1 rounded-full text-xs font-bold text-black">{item?.name}</li>
                    ))}
                    
                </ul>
                <ul className="text-gray-400">
                    <li>{vote_average}</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default MovieDetailHeader