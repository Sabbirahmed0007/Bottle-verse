/**
 * 1, To get something from local storage, your will get it as a sting
 * 2, convert this to javascript object/array
 * 
 * 
 * add item to the local Storage 
 * 
 * then save it in the local storage
 */


const getCartItemFromLocalStorage = () => {
    const getCartFromLocalStorage = localStorage.getItem("cart");

    if (getCartFromLocalStorage) {
        const getCartObject = JSON.parse(getCartFromLocalStorage);


        return getCartObject;
    }
    return [];
}


const saveCartToLocalStorage = (cart) => {


    const stringfiedCart = JSON.stringify(cart);

    localStorage.setItem('cart', stringfiedCart

    );
    


}


const addCartsToLocalStorage = (id) => {
    const addCarts = getCartItemFromLocalStorage();

    const addCartsIds = [...addCarts, id];

    saveCartToLocalStorage(addCartsIds);


}


const removeFromLocalStorage = (id) => {

    const storedCart = getCartItemFromLocalStorage();

    const remainingCarts = storedCart.filter(storedid => storedid !== id);

    saveCartToLocalStorage(remainingCarts);
    
}



export {
    addCartsToLocalStorage as addToCart, getCartItemFromLocalStorage as getCarts,
    removeFromLocalStorage as removeCart
 };
    
    
    
/**
 * 

const getCartFromLocalStorage = () => {

    const storedCartString = localStorage.getItem('cart');
    
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
 

    
}


const saveCartToLocalStorage = (cart) => {

    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
    
}

const addCartToLocalStorage = (id) => {

    const cart = getCartFromLocalStorage(); 
    // cart.push(id);

    const newCart = [...cart, id];


    saveCartToLocalStorage(newCart);


    


}



export {getCartFromLocalStorage as getCart, addCartToLocalStorage as addCart}

 */

