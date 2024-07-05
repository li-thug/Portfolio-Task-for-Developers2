import "./App.css";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import MySkills from "./components/MySkills";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <main>
        <NavBar />
        <Header />
        <MySkills />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
