import { Logo } from "./"

const Navbar = () => {
  return (
    <nav className="p-3 sticky">
        <div className="mx-auto w-32">
            <Logo />
        </div>
    </nav>
  )
}

export default Navbar