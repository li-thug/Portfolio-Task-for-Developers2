import logo from "../assets/Image/image 1.png";
import facebook from "../assets/Image/Facebook.png";
import Ig from "../assets/Image/Instagram.png";
import twitter from "../assets/Image/Twitter.png";
import linkedin from "../assets/Image/LinkedIn.png";
import "../style/Header.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container-xxl">
          <div className="d-lg-flex justify-content-between mb-5 ">
            <div className="d-flex justify-content-center mt-3 ">
              <a href="#" className="text-decoration-none">
                <img src={logo} alt="" className="nav-logo  foot-brand" />
                <span
                  id="johnDev"
                  className="ms-3 text-decoration-none navbar-brand text-dark foot-brand fw-bold"
                >
                  JohnDev,
                </span>
              </a>
            </div>
            <div className="d-flex d-none d-lg-block gap-4 mt-3">
              <a href="#" className="text-decoration-none text-dark me-3">
                Home
              </a>
              <a
                href="#projects"
                className="text-decoration-none text-dark me-3"
              >
                Portfolio
              </a>
              <a href="#about" className="text-decoration-none text-dark me-3">
                About me
              </a>
              <a
                href="#contact"
                className="text-decoration-none text-dark  me-3"
              >
                Contact
              </a>
              <a
                href="#testimonial"
                className="text-decoration-none text-dark me-3"
              >
                Testimonials
              </a>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-3 socials">
              <img src={facebook} alt="" style={{ height: "40px" }} />
              <img src={Ig} alt="" style={{ height: "40px" }} />
              <img src={twitter} alt="" style={{height: "40px" }} />
              <img src={linkedin} alt="" style={{ height: "40px"}} />
            </div>
          </div>
          <hr className="opacity-50 " />
          <div className="d-flex justify-content-between">
            <p className="mt-2 policy-links fw-bold"> Made with 💖 by Airdokan {year}</p>
            <div className="d-flex gap-3 align-items-center mt-2 policy-links mb-4">
              <a href="" className="text-decoration-none text-dark">
                Privacy Policy
              </a>
              <a href="" className="text-decoration-none text-dark">
                Terms of Service
              </a>
              <a href="" className="text-decoration-none text-dark">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
