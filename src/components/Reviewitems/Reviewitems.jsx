import React from "react";

const Reviewitems = ({product}) => {
    return (
        <div className="border border-gray-800 mb-10">
            <h1>{product.name}</h1>
        </div>
    )
};

export default Reviewitems;