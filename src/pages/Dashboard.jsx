import { useContext } from "react";
import { LevelContext } from "../context/context";


const Dashboard = () => {

    const { coffees, setCoffees, wishListCoffees, setWishListCoffees } = useContext(LevelContext)

    const handleRemoveCart = (id) => {
        const filterdItems = coffees.filter((coffee) => coffee.id !== id)
        setCoffees(filterdItems)
    }

    const handleRemoveWishLish = (id) => {
        const filteredItems = wishListCoffees.filter((coffee) => coffee.id !== id);
        setWishListCoffees(filteredItems)
    }

    return (
        <div className="flex justify-between px-5 mt-10">
            <div className="">
                <h2 className="text-3xl font-bold">Cart Items</h2>
                {coffees.map((coffee, i) =>
                    <div key={i} className="border rounded-xl p-5 my-4">
                        <img src={coffee.image} alt="" className="w-[200px]" />
                        <p>Name: {coffee.name}</p>
                        <div className="flex justify-between">
                            <p>Id: {coffee.id}</p>
                            <button className="text-red-600 text-3xl" onClick={() => handleRemoveCart(coffee.id)}><i className="fa-solid fa-circle-xmark"></i></button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h2 className="text-3xl font-bold">Wish List Items</h2>
                {wishListCoffees.map((coffee, i) =>
                    <div key={i} className="border rounded-xl p-5 my-4">
                        <img src={coffee.image} alt="" className="w-[200px]" />
                        <p>Name: {coffee.name}</p>
                        <div className="flex justify-between">
                            <p>Id: {coffee.id}</p>
                            <button className="text-3xl text-red-600" onClick={() => handleRemoveWishLish(coffee.id)}><i className="fa-solid fa-circle-xmark"></i></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;