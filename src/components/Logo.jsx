import { Link } from 'react-router-dom'
import Uranus from '../assets/uranus.png'
const Logo = () => {
  return (
    <Link to='/'>
      <div className='w-full'>
        <img className='w-full' src={Uranus} alt="Uranus" />
      </div>
    </Link>
  )
}

export default Logo