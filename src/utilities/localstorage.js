
const getStoredCart=()=>{
    const storedCartString= localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}
const saveCartToLS=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
}

const addToLs=id=>{
    const cart=getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}
export {addToLs,getStoredCart}
