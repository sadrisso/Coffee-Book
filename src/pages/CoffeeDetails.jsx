
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {

    const { id } = useParams();
    const allData = useLoaderData()
    const selectedItem = allData.find((data) => data.id == id)

    console.log(selectedItem)

    return (
        <div>
            <h2 className="text-4xl my-5 font-bold text-center">Coffee Details</h2>
            <div className="border rounded-2xl p-5 ">
                <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
                <p className="mb-5">{selectedItem.description}</p>
                <hr />
                <img src={selectedItem.image} alt="" className="h-[450px] w-[1250px] mx-auto rounded-xl" />
                <hr />
                <div>
                    <h2 className="mt-5 text-xl font-bold">Ingredientes : </h2>
                    {selectedItem.ingredients.map((ing, i) => <p key={i}>{ing}</p>)}
                </div>
                <button className="btn mt-5 btn-success text-white">Add To Favourite</button>
            </div>
        </div>
    );
};

export default CoffeeDetails;