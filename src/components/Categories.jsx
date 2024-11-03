/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {


    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed my-4">
                {categories.map((category, i) => <NavLink to="/cards" key={i} className="tab" role="tab">
                    {category.category}
                </NavLink>)}
            </div>
        </div>
    );
};

export default Categories;