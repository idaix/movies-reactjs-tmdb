import { Link } from "react-router-dom"

const BASE_URL = 'https://image.tmdb.org/t/p/w500/'
const Card = ({ title, poster_path, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="rounded overflow-hidden">
        {poster_path&&
          <img src={`${BASE_URL}${poster_path}`} alt={title} />
        }
        <h3 className="text-slate-50 py-3">{title}</h3>
      </div>
    </Link>
    
  )
}

export default Card