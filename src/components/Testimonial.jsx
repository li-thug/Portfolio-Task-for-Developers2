import "../style/Header.css";
import star from "../assets/Image/Stars.png";
import profile from "../assets/Image/Avatar Image.png";
import profile1 from "../assets/Image/Avatar Image-1.png";
import profile2 from "../assets/Image/Avatar Image-2.png";


const Testimonial = () => {
  return (
    <>
      <main id="testimonial" className="p-4  groundclo">
        <section className="container ">
          <p className="portfolio">Clients Feedback</p>
          <h1 className="my-portfolio fw-bold">Customer testimonials</h1>
          <div className="d-lg-flex justify-content-between gap-3 mb-5 mt-5">
            <div className="testicard mb-5 py-3">
              <div className="d-flex gap-2 m-3">
              <img src={star} alt="" style={{ width: "100px" }} />
              </div>

              <p className="m-3">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="d-flex gap-2 ">
                <img src={profile} alt="" className="mx-2" style={{ width: "60px", height: "50px" }} />
                <div className=" ">
                  <span className="title">Dianne Russell</span>
                  <p className="city">Starbucks</p>
                </div>
              </div>
            </div>
            <div className="testicard mb-5 py-3">
              <div className="d-flex gap-2 m-3">
              <img src={star} alt="" style={{ width: "100px" }} />
              </div>

              <p className="m-3">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="d-flex gap-2 ">
                <img src={profile1} alt="" className="mx-2" style={{ width: "60px", height: "50px" }} />
                <div className="">
                  <span className="title">Kristin Watson</span>
                  <p className="city">Louis Vuitton</p>
                </div>
              </div>
            </div>

            <div className="mb-5 testicard py-3">
              <div className="d-flex gap-2 m-3">
                <img src={star} alt="" style={{ width: "100px" }} /> 
              </div>

              <p className="m-3">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="d-flex gap-2 ">
                <img src={profile2} alt="" className="mx-2" style={{ width: "60px", height: "50px" }} />
                <div className="">
                  <span className="title">Kathryn Murphy</span>
                  <p className="city">McDonald&apos;s</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonial;
