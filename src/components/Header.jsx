import "../style/Header.css";
import Johnimg from "../assets/Image/Group 11 1.png";

const Header = () => {
  return (
    <>
      <main className="hero p-4 ">
        <section className="container-xxl hero-section">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <p id="name" className="">
                Hey, I am John
              </p>
              <p id="develop">
                I develop dynamic and User-Centered Web Applications
              </p>
              <p id="expertise">
                My expertise spans both front-end and back-end development,
                enabling me to build comprehensive solutions that meet diverse
                client needs.
              </p>
              <a
                href="#contact"
                className="text-white text-decoration-none btn  contact-btn  rounded-1  mb-5 "
              >
                Get In Touch
              </a>
            </div>
            <div className="col-lg-6">
              <img src={Johnimg} alt="" className="w-100 " />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Header;
