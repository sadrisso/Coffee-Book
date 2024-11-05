import { useLoaderData, Link } from "react-router-dom";


const Coffees = () => {

    const allData = useLoaderData();

    return (
        <div>
            {allData.map((data, i) =>
                <div key={i} className="">
                    <div className="border rounded-2xl p-5 ">
                        <h2 className="text-2xl font-bold mb-5">{data.name}</h2>
                        <img src={data.image} alt="" className="h-[450px] w-[1270px] mx-auto rounded-xl" />
                        <Link to={`/coffee/${data.id}`}><button className="btn btn-info mt-5 text-white">Details</button></Link>
                    </div>
                </div>)}
        </div>
    );
};

export default Coffees;