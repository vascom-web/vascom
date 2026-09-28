import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Technologies from "./Components/Technologies";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from './Components/Contact'
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Profile from "./Components/Profile";
export default function ImportFile() {
    return (
        <>
            <Header />
            <Hero />
            <Technologies/>
           <About/>
           <Profile/>
            <Skill/>
            <Testimonial/>
            <FAQ/>
            <Contact/>
            <Footer/>


        </>
    );
}