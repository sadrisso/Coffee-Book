import { useLoaderData, Link } from "react-router-dom";


const Coffees = () => {

    const allData = useLoaderData();

    return (
        <div>
            {allData.map((data, i) =>
                <div key={i}>
                    <div className="border rounded-2xl p-5 ">
                        <h2>{data.name}</h2>
                        <img src={data.image} alt="" className="h-[150px] w-[270px] mx-auto rounded-xl" />
                        <Link to={`/coffee/${data.id}`}><button className="btn">Details</button></Link>
                    </div>
                </div>)}
        </div>
    );
};

export default Coffees;