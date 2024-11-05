
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {

    const { id } = useParams();
    const allData = useLoaderData()
    const selectedItem = allData.find((data) => data.id == id)

    console.log(selectedItem)

    return (
        <div>
            <div className="border rounded-2xl p-5 ">
                <h2>{selectedItem.name}</h2>
                <img src={selectedItem.image} alt="" className="h-[150px] w-[270px] mx-auto rounded-xl" />
            </div>
        </div>
    );
};

export default CoffeeDetails;