import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "../components/navBar/NavBar";
import { NavBarGlr } from "../components/navBar/NavBarGlr";
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarGlr 
        
      />
       <Component {...pageProps} />
    </>
  )
}

export default MyApp
