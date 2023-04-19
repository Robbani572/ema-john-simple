import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid'

const Reviewitems = ({ product, handleRemoveCart }) => {

    const { id, name, img, price, shipping } = product


    return (



        <div className="border border-gray-800 mb-10 flex justify-between items-center">
            <div className="flex">
                <img className="h-24 w-24" src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p>{shipping}</p>
                </div>
            </div>

            <button onClick={() => handleRemoveCart(id)}>
                <TrashIcon className="h-6 w-6 text-orange-500" />
            </button>
        </div>
    )
};

export default Reviewitems;