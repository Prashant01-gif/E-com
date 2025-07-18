const Totalamount = (cartData) => {
    let Totalamount = 0 ;
    cartData.forEach(
        (item) =>
       { Totalamount= Totalamount + (Number(item.caloriesPerServing) * Number (item.quantity))
    })

    return Totalamount;
};
export default Totalamount