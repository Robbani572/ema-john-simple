import { getShoppingCart } from "../../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const sevedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            sevedCart.push(addedProduct);
        }
    }

    console.log(sevedCart)
    return sevedCart;
}

export default cartProductsLoader;