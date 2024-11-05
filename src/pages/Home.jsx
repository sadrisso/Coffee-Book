
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            <Banner />
            <Heading title="Browse Coffee By Category" subtitle="Choose your desired coffee category by browse through specific coffee category"/>
            <Categories categories={categories} />
            <Outlet />
        </div>
    );
};

export default Home;