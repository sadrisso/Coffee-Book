
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Category from "./Category";


const CategoryCard = () => {

    const {category} = useParams();
    const allData = useLoaderData();
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredData = [...allData].filter((data) => data.category === category)
            setCoffees(filteredData)
        }
        else {
            setCoffees(allData)
        }
    }, [allData, category])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coffees.map((coffee, i) => <Category key={i} coffee={coffee}/>)}
        </div>
    );
};

export default CategoryCard;