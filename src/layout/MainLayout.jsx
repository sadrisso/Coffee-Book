import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { LevelContext } from "../context/context";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {

    const [coffees, setCoffees] = useState([]);
    const [wishListCoffees, setWishListCoffees] = useState([]);

    return (
        <LevelContext.Provider value={{ coffees, setCoffees, wishListCoffees, setWishListCoffees }}>
            <div className="container mx-auto">
                <div className="h-16">
                    <Header />
                </div>
                <div className="min-h-[calc(100vh-290px)] ">
                    <Outlet />
                </div>
                <Footer />
                <ToastContainer
                    position="top-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </LevelContext.Provider>
    );
};

export default MainLayout;