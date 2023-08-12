// import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../components/Hom/Hom/Home";


const Main = () => {
    return (
        <div className="bg-stone-900">
            <Header></Header>

            <Home></Home>

            <Footer></Footer>
        </div>
    );
};

export default Main;