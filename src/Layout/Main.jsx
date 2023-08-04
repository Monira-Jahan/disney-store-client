import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Footer2 from "../Shared/Footer2/Footer2";
import Header from "../Shared/Header/Header";


const Main = () => {
    return (
        <div>
         <Header></Header>
         <Outlet></Outlet>
         <Footer></Footer>
         <Footer2></Footer2>
        </div>
    );
};

export default Main;