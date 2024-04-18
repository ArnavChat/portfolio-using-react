import Navbar from "./HobbiesNavbar";
import Footer from "../HomepageComponents/Footer";
import Header from "./Header";
import Music from "./Music";
import Cricket from "./Cricket";
import Coding from "./Coding";
import "../../css/Hobbies/Hobbies.css"

function Hobbies() {
  return (
    <>
      <Navbar />
      <Header />
      <Music />
      <Cricket />
      <Coding />
      <Footer />
    </>
  );
}

export default Hobbies;
