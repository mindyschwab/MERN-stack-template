import { Link } from "react-router-dom"

// resource for responsive navbar using tailwind and react: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <p> Home </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <p> About </p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <p> Projects </p>
                        </Link>
                    </li>
                </ul>
            </nav >
        </>
    )
}

export default Navbar