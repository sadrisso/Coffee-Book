
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { LevelContext } from "../context/context";
import { toast } from "react-toastify";


const CoffeeDetails = () => {

    const { id } = useParams();
    const allData = useLoaderData()
    const {coffees, setCoffees, wishListCoffees, setWishListCoffees} = useContext(LevelContext)
    const selectedItem = allData.find((data) => data.id == id)


    const handleAddToCart = () => {
        const cartItems = [...coffees, selectedItem];
        setCoffees(cartItems);
        toast.success("Item added to the cart")
    }

    const handleAddToWishList = () => {
        const wishListItems = [...wishListCoffees, selectedItem];
        setWishListCoffees(wishListItems);
        toast.success("Item added to the wish list")
    }

    return (
        <div className="">
            <h2 className="text-4xl my-5 font-bold text-center">Coffee Details</h2>
            <div className="border rounded-2xl p-5 ">
                <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
                <p className="mb-5">{selectedItem.description}</p>
                <hr />
                <div className="py-5">
                    <img src={selectedItem.image} alt="" className="h-[650px] w-[1500px] mx-auto rounded-xl" />
                </div>
                <hr />
                <div>
                    <h2 className="mt-5 text-xl font-bold">Ingredientes : </h2>
                    {selectedItem.ingredients.map((ing, i) => <p key={i}>{ing}</p>)}
                </div>
                <button className="btn mt-5 btn-success text-white mr-4" onClick={handleAddToCart}>Add To Cart</button>
                <button className="btn btn-warning text-white" onClick={handleAddToWishList}>Add to Wish List</button>
            </div>
        </div>
    );
};

export default CoffeeDetails;