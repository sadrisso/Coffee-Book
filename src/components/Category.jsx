/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Category = ({coffee}) => {

    const {name, image, id} = coffee;

    return (
        <div className="border rounded-2xl p-5 ">
            <h2>{name}</h2>
            <img src={image} alt="" className="h-[150px] w-[270px] mx-auto rounded-xl"/>
            <Link to={`/coffee/${id}`}><button className="btn">Details</button></Link>
        </div>
    );
};

export default Category;