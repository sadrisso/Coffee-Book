import { useContext } from "react";
import { LevelContext } from "../context/context";


const Dashboard = () => {

    const { coffees, wishListCoffees } = useContext(LevelContext)

    return (
        <div className="flex justify-between px-5 mt-10">
            <div>
                <h2 className="text-3xl font-bold">Cart Items</h2>
                {coffees.map((coffee, i) =>
                    <div key={i}>
                        <img src={coffee.image} alt="" className="w-[200px]" />
                        <p>Name: {coffee.name}</p>
                        <p>Id: {coffee.id}</p>
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-3xl font-bold">Wish List Items</h2>
                {wishListCoffees.map((coffee, i) =>
                    <div key={i}>
                        <img src={coffee.image} alt="" className="w-[200px]" />
                        <p>Name: {coffee.name}</p>
                        <p>Id: {coffee.id}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;