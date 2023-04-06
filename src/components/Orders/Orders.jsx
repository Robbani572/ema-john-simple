import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import Reviewitems from "../Reviewitems/Reviewitems";

const Orders = () => {

    const cart = useLoaderData()
    console.log(cart.length)

    return (
        <div className="flex">
            <div className="mx-auto mt-12 border-gray-900">
                {
                    cart.map(product => <Reviewitems
                    key={product.id}
                    product = {product}
                    ></Reviewitems>)
                }
            </div>
            <div className="ml-auto">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Orders;