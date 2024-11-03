/* eslint-disable react/prop-types */


const Heading = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 my-4">
            <h2 className="text-3xl font-thin">{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;