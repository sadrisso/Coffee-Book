import { useLoaderData } from "react-router-dom";
import Coffee from "../Coffee/Coffee";


const Coffees = () => {

    const coffeesData = useLoaderData();

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-4">Coffees : {coffeesData.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {coffeesData.map((coffee, i) => <Coffee key={i} coffee={coffee}/>)}
            </div>
        </div>
    );
};

export default Coffees;