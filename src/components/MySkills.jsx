import "../style/Header.css";
import tag from "../assets/Image/tag 1.png";
import icomoon from "../assets/Image/icomoon-free_mobile.png";
import carbon from "../assets/Image/carbon_ibm-engineering-test-mgmt.png";
import featherPen from "../assets/Image/feather-pen 1.png";

const MySkills = () => {
  return (
    <>
      <main id="skills" className="p-4 ">
        <section className="skills ">
          <div className="container-xxl mt-5 mb-5">
            <div>
              <p id="myskills">My Skills</p>
              <h1 className="fw-bold" id="myexpertise">
                My Expertise
              </h1>
            </div>

            <div className="d-lg-flex justify-content-between align-items-center w-100 gap-3 mt-2 cards-div">
              <div className="rounded mt-3 cards bottom-purple">
                <div>
                  <img
                    src={icomoon}
                    alt=""
                    className="m-3 bg-light rounded shadow-sm p-2"
                    style={{ width: "55px", height: "55px" }}
                  />
                </div>
                <div className="gap-1 pb-3">
                  <h1 className="title m-3">Responsive Design</h1>
                  <p className="m-3 text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
              <div className="rounded mt-3 cards">
                <img
                  src={tag}
                  alt=""
                  className="m-3 bg-light rounded shadow-sm p-2"
                  style={{ width: "55px", height: "55px" }}
                />
                <h1 className="title m-3">Front-End Frameworks</h1>
                <p className="m-3 text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded mt-3 cards">
                <img
                  src={carbon}
                  alt=""
                  className="m-3 bg-light rounded shadow-sm p-2"
                  style={{ width: "55px", height: "55px" }}
                />
                <h1 className="title m-3">Testing and Debugging</h1>
                <p className="m-3 text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="rounded mt-3 cards ">
                <img
                  src={featherPen}
                  alt=""
                  className="m-3 bg-light rounded shadow-sm p-2"
                  style={{ width: "55px", height: "55px" }}
                />
                <h1 className="title m-3">Cloud Services</h1>
                <p className="m-3 text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MySkills;
