import Card from "react-bootstrap/Card";
import Project1 from "../assets/Image/Image.png";
import Project2 from "../assets/Image/Image-1.png";
import Project3 from "../assets/Image/Image-2.png";
import arrow1 from "../assets/Image/Vector.png";
import arrow2 from "../assets/Image/Vector2.png";
import gitHub from "../assets/Image/mdi_github.png";
import "../style/Header.css";

const Portfolio = () => {
  return (
    <>
      <main id="projects" className="p-4">
        <section className="container">
          <div className="d-flex">
            <div className="w-50">
              <p className="portfolio">Recent Projects</p>
              <h1 className="my-portfolio">My Portfolio</h1>
            </div>

            <div className="position-relative w-50">
              <a
                href="#"
                className="btn git-btn text-white d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
              >
                <img src={gitHub} alt="" />
                Visit My GitHub
              </a>
            </div>
          </div>

          <div className="d-lg-flex justify-content-between gap-2 mb-5">
            <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Project1} className="" />
              <Card.Body>
                <Card.Title className="title fw-bold">Ahuse</Card.Title>
                <Card.Text className="portfolio-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Card.Text>

                <a
                  href="#"
                  className="text-decoration-none text-dark pe-1 cardLink"
                >
                  Visit website{" "}
                  <img src={arrow1} alt="" style={{ width: "10px" }} />
                </a>
              </Card.Body>
            </Card>
            <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Project2} />
              <Card.Body>
                <Card.Title className="title fw-bold">App Dashboard</Card.Title>
                <Card.Text className="portfolio-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Card.Text>

                <a
                  href="#"
                  className="text-decoration-none text-dark pe-1 cardLink"
                >
                  Visit website{" "}
                  <img src={arrow2} alt="" style={{ width: "10px" }} />
                </a>
              </Card.Body>
            </Card>
            <Card className="w-100 mt-3 shadow-lg">
              <Card.Img variant="top" src={Project3} />
              <Card.Body>
                <Card.Title className="title fw-bold">Easy Rent</Card.Title>
                <Card.Text className="portfolio-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Card.Text>

                <a
                  href="#"
                  className="text-decoration-none text-dark pe-1 cardLink"
                >
                  Visit website{" "}
                  <img src={arrow2} alt="" style={{ width: "10px" }} />
                </a>
              </Card.Body>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
