const RemoveCart = (data,setCart) =>{
    const cartItems = localStorage.getItem("cart");
    const actualData = JSON.parse(cartItems);
    const updatedData = actualData.filter ((item) => item.id !=data.id);
    localStorage.setItem("cart", JSON.stringify(updatedData));
    setCart(updatedData)

};
export default RemoveCart;