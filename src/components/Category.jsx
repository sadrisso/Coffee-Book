

const Category = ({coffee}) => {

    const {name, image} = coffee;

    return (
        <div className="border rounded-2xl p-5 ">
            <h2>{name}</h2>
            <img src={image} alt="" className=""/>
        </div>
    );
};

export default Category;