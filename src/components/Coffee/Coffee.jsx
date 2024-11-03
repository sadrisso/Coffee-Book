import { Link } from "react-router-dom";


const Coffee = ({coffee}) => {

    const {category, id, image, } = coffee;

    return (
        <div className="border p-5 space-y-3">
            <h2>{category}</h2>
            <p>Id : {id}</p>
            <img src={image} alt="" />
            <Link to={`coffees/coffee-details/${id}`}><button className="btn btn-xs font-bold btn-primary">See Details</button></Link>
        </div>
    );
};

export default Coffee;