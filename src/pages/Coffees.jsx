import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";


const Coffees = () => {

    const allData = useLoaderData();
    const [coffees, setCoffees] = useState(allData);

    const handleSortByPopularity = (sortBy) => {
        if(sortBy === 'popularity') {
            const sorted = [...allData].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if (sortBy === 'rating'){
            const sorted = [...allData].sort((a,b) => a.rating - b.rating)
            setCoffees(sorted)
        }
    }

    return (
        <div>
            <div className="flex justify-between my-10">
                <div className="text-3xl font-thin">Sort by popularity or rating</div>
                <div className="flex gap-2">
                    <button className="btn" onClick={() => handleSortByPopularity("popularity")}>Sort By Popularity</button>
                    <button className="btn" onClick={() => handleSortByPopularity("rating")}>Sort By Rating</button>
                </div>
            </div>
            {coffees.map((data, i) =>
                <div key={i} className="">
                    <div className="border rounded-2xl p-5 ">
                        <h2 className="text-2xl font-bold mb-5">{data.name}</h2>
                        <img src={data.image} alt="" className="h-[450px] w-[1270px] mx-auto rounded-xl" />
                        <div className="flex justify-evenly my-5 font-bold text-2xl">
                            <p>Popularity : {data.popularity}</p>
                            <p>Rating : {data.rating}</p>
                        </div>
                        <Link to={`/coffee/${data.id}`}><button className="btn btn-info mt-5 text-white">Details</button></Link>
                    </div>
                </div>)}
        </div>
    );
};

export default Coffees;