import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";


const Categories = () => {

    const categories = useLoaderData();

    return (
        <div>
            {categories.map((category, i) => <Category key={i} category={category}/>)}
        </div>
    );
};

export default Categories;