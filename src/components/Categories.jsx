
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed my-4">
                {categories.map((category, i) =>
                    <NavLink
                        to={`/category/${category.category}`}
                        key={i}
                        className={({isActive}) => isActive ? "text-red" : "tab"}
                        role="tab">
                        {category.category}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;