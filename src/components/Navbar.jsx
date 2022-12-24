import { Logo } from "./"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useLocation } from "react-router-dom"
const Navbar = () => {
  const { pathname } = useLocation()
  console.log(pathname);
  return (
    <nav className="p-3 sticky">
        <div className="mx-auto w-32">
            <Logo />
        </div>
        {pathname!='/'&&(
          <div className="absolute top-[50%] translate-y-[-50%] left-10 text-white">
            <Link to='/'>
              <AiOutlineArrowLeft />
            </Link>
          </div>
        )}
    </nav>
  )
}

export default Navbar