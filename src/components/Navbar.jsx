import Logo from "../assets/Image/image 1.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style/Header.css";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="">
      <section className="container-xxl position-fixed bg-white pt-5">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <h1 className="navbar-brand">JohnDev,</h1>
        </Navbar.Brand>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto">
            <a  href="#" className="nav-link">
              Home
            </a>
            <a  href="#projects" className="nav-link">
              Portfolio
            </a>
            <a href="#about" className="nav-link">
              About me
            </a>
            <a href="#testimonial" className="nav-link">
              Testimonials
            </a>
          </Nav>
          <a href="#contact" className="contact-button">
            Contact Me
          </a>
        </Navbar.Collapse>
      </section>
    </Navbar>
  );
};
export default NavBar;