/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";


const Coffees = () => {

    const {id} = useParams();
    console.log(id)

    return (
        <div>
            coffees
        </div>
    );
};

export default Coffees;