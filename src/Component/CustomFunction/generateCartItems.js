const generateCartItem = (cart) => {
    console.log("cart ", cart);
    const tempArray = [];
    cart.map((item) =>{
           tempArray.push({itemName: item.pName, quantity: item.quantity})
        });

        return tempArray;



}

export default generateCartItem;