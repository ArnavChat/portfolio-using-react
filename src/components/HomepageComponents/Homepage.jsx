import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";


function Homepage(){
    return (
        <>
        <Navbar />
        <AboutMe  />
        <Education />
        <Projects />
        <Skills />
        <Footer />
        </>
      
    );
}

export default Homepage;