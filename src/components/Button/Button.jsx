import { Link } from 'react-router-dom'
import './styles.css'

const Button = ({ title, wFull, link, to, onClick }) => {
    return (
        <>
            {link?(
                <Link to={to} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{title}</span>
                </Link>
            ):(
                <button onClick={() => onClick()} class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{title}</span>
                </button>
            )}
        </>
    )
}

export default Button

