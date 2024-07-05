import "../style/Header.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <>
      <main id="contact" className="p-4">
        <section className="container-xxl mb-5">
          <div className="text-center">
            <p className="get-in-touch">Get In Touch</p>
            <h1 className="contact-me mb-4">Contact Me</h1>
            <p className="contact-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="d-flex justify-content-center ">
            <Form>
              <div className="d-flex gap-4 w-100 ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="contact-text">First Name</Form.Label>
                  <Form.Control type="text" size="md" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="contact-text">Last Name</Form.Label>
                  <Form.Control type="text" size="md" />
                </Form.Group>
              </div>

              <div className="d-flex gap-4 w-100">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="contact-text">
                    Email address
                  </Form.Label>
                  <Form.Control type="email" size="md" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="contact-text">Phone Number</Form.Label>
                  <Form.Control size="md" type="number" />
                </Form.Group>
              </div>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="contact-text">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message..."
                  className="resizing"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I accept the terms"
                  className="contact-text"
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-5 submit-btn">
                Submit
              </Button>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
