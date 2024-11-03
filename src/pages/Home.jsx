import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Heading title={"This is Heading"} subtitle={"This is subTitle"}/>
        </div>
    );
};

export default Home;