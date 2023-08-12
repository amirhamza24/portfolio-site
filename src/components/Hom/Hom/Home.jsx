import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;