
import ReactDOM from 'react-dom/client';
import {useRoutes, useNavigate, useLocation, Link} from 'react-router-dom';
import './App.css';
import github from './assets/github-b.png';
import instagram from './assets/instagram-b.png';
import linkedin from './assets/linkedin-b.png';
import aiImage from './assets/profilepic.jpeg';
import replace from './assets/replacepic.png';
import close from './assets/x.png';
import NotFound from './notfound.jsx';
import Projects from './projects.jsx';
import UXDesign from './uxdesign.jsx';
import Contact from "./contact.jsx";
import React, { useState,useEffect} from "react";
import hamburger from "./assets/hamburger.png";
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate('/#contact');
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="navbar">
      {/* Regular Menu */}
    <div className="log-h2-combo">
      <div className="logo-box"></div>
      <h2>Name of Website</h2>
    </div>
         <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/projects">Software Projects</Link>
        {/* You can remove if not using */}
        <Link to="/uxdesign">UX Projects</Link>
        <button onClick={() => navigateToContact()}>Contact</button>

      </div>

      {/* Hamburger menu for small screens initally hidden*/}
      <div className="hamburger-container" onClick={() => setMenuOpen(true)}>
          <img src={hamburger} alt="menu" className="hamburger" />
          <h4>Menu</h4>
      </div>


      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className={`menu-overlay ${menuOpen ? 'menu-animate' : ''}`}>
        <img
          className='img-close'
          src={close}
          alt="close"
          onClick={() => setMenuOpen(false)} // Ensures menu closes when the icon is clicked
        />
          <ul>
            <li><Link to="/" onClick={toggleMenu}> About Me </Link> </li>
            <li><Link to="/projects" onClick={toggleMenu}> Projects  </Link></li>
            <li><Link to="/uxdesign" onClick={toggleMenu}>UX Design Projects</Link> </li>
            <li><a onClick={() => { scrollToContact(); toggleMenu(); }}>Contact</a></li>
  
            <div className="icon-barr">
              <img src={github} alt="github" />
              <img src={linkedin} alt="linkedin" />
              <img src={instagram} alt="instagram" />
            </div>
          </ul>

        </div>
      )}
    </nav>
  );
}

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#contact') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]); 

  return (
    <>
      <NavBar />
      <div className="header">
        <div className="header-box">
          <div className="header-left">
          <img src={aiImage} alt="AI avatar" className="ai-image" />
            <h2 className='myname'>Your Name</h2>
            <hr></hr>
            <h3 >Optional: Subheading</h3>
            <div className="icon-bar">
              <img src={github} alt="github" />
              <img src={linkedin} alt="linkedin" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
          <div className="header-right">
            <h1>Hello!</h1>
            <h2>I am a xyz</h2>
            <div className="button-group">
              <button>View Resume</button>
              <button>View Projects</button>
            </div>
            <p>
              Here you can write more about yourself
              <br />
              <strong>This portfolio</strong> showcases my projects in xyz.
            </p>
          </div>
        </div>
        <div className="dynamic-section">
          <h1>My Past Work</h1>
          <div className="box-container">
            <div className="box">
              <img src={replace} alt="project0" />
              <Link to="/project-url">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={replace} alt="project1" />
              <Link to="/project-url">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={replace} alt="project2" />
              <Link to="/project-url">
                <button>Learn More</button>
              </Link>
            </div>
            <div className="box">
              <img src={replace} alt="project3" />
              <Link to="/project-url">
                <button>Learn More</button>
              </Link>
            </div>
          </div>
          {/* <Experience/> */}
          <div id="contact-section">
          <Contact/></div>
        </div> 
      </div>
    </>
  );
}

function App() {
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/not-found", element: <NotFound /> },
    { path: "/projects", element: <Projects /> },
    { path: "/uxdesign", element: <UXDesign /> },
    { path: "/contact", element: <Contact /> },
  ]);
  return <main>{element}</main>;
}

export default App;