import { useContext } from "react";
import { LevelContext } from "../context/context";


const Dashboard = () => {

    const {coffees} = useContext(LevelContext)

    return (
        <div>
            {coffees.map((coffee, i) =>
                <div key={i}>
                    <img src={coffee.image} alt="" className="w-[200px]" />
                    <p>Name: {coffee.name}</p>
                    <p>Id: {coffee.id}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;