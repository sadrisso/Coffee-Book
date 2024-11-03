import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {

    const id = useParams();
    const allData = useLoaderData()
    const filteredData = allData.filter((data) => data.id === id);

    console.log(filteredData)

    return (
        <div>
            <h2>{filteredData.length}</h2>
        </div>
    );
};

export default CoffeeDetails;