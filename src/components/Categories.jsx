
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Categories = ({ categories }) => {

    return (
        <div>
            <div className="bg-slate-300 p-5 text-center rounded-3xl mb-4">
                {categories.map((category, i) =>
                    <NavLink
                        to={`/category/${category.category}`}
                        key={i}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-700 text-xl" : "btn mx-3"
                          }
                        role="tab">
                        {category.category}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;