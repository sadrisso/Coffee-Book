

const Category = ({ category }) => {

    console.log(category)

    return (
        <div className="">
            <h2 className="border m-5">{category.category}</h2>
        </div>
    );
};

export default Category;