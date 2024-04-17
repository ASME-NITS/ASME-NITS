import { Link } from "react-router-dom";
import asme from "../assets/asme.png";
import { HashLink } from "react-router-hash-link";



const Header = () => {
  return (
    <>
    <nav>
      <p>gcgcvgh</p>
        <main>
            <img src={asme} alt="thurrnr" />
            <p>xfcghv</p>
            <HashLink to={"/#home"}>Home </HashLink>
            <Link to={"/About"}> About</Link>
            <Link to={"/events"}> Events</Link>
            <Link to={"/gallery"}>Gallery </Link>
            <Link to={"/contact"}>Contact </Link>

        </main>
    </nav>
    </>
  )
}

export default Header