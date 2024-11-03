import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Header/>
                <div className="min-h-[calc(100vh-290px)] ">
                    <Outlet />
                </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;