const Addquantity = (data, setCart) => {

const localData = JSON.parse(localStorage.getItem("cart"));
const index = localData.findIndex((item) => item.id == data.id);
localData[index].quantity +=1;
localStorage.setItem("cart", JSON.stringify(localData));
setCart(localData);

};
export default Addquantity;