
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Portfolio from './Portfolio';
import FruitShop from './FruitShop';


const Navbar = () => {
const location = useLocation();  // Get the current route
 //console.log(location)
// 
  // Function to decide which content to render in the left column
  const getLeftColumnContent = () => {
    switch (location.pathname) {

      
      case "/Home":
        return <Home />;
      case "/About":
        return <About />;
        case "/Services":
          return <Services />;
          case "/Contact":
            return <Contact />;
            case "/Portfolio":
              return <Portfolio />;
                case "/FruitShop":
              return <FruitShop />;
      default:
        return <Home />;
    }
  };

  // Function to decide which content to render in the right column
  // const getRightColumnContent = () => {
  //   switch (location.pathname) {
  //     case "/about":
  //       return <div>6</div>;
  //     case "/services":
  //       return <div></div>;
  //     case "/contact":
  //       return <div></div>;
        
  //     default:
  //       return <div></div>;
  //   }
  // };

  return (
    <div>
      <div className="container border mt-4">
        <div className="row">
          <nav className="navbar">
            <ul className="navList">
            
              <li className="navItem">
                <Link to="/" className="navLink">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/About" className="navLink">About</Link>
              </li>
              <li className="navItem">
                <Link to="/Services" className="navLink">Services</Link>
              </li>
              <li className="navItem">
                <Link to="/Contact" className="navLink">Contact</Link>
              </li>
              <li className="navItem">
                <Link to="/Portfolio" className="navLink">Portfolio</Link>
              </li>
              <li className="navItem">
                <Link to="/FruitShop" className="navLink">Fruit Shop</Link>
              </li>
            </ul>
          </nav>

          {/* Left Column */}
          <div className="container-fluid" style ={{backgroundColor:'#FBFBFB',}}>
            <div className = "row">
              <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
                
            {getLeftColumnContent()}
            </div>
            </div>
            {/* Render content based on current route */}
          </div>

          {/* Right Column */}
          {/* <div className="col-md-6">
          {getRightColumnContent()}{ /*  Render additional content based on current route */}
          {/* </div> */}
        </div>
        {/* <Footer />  */}
      </div>
     
    </div>
  );
  };

export default Navbar;
