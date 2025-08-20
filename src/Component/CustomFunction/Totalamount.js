const Totalamount = (cartData) => {
    let Totalamount = 0 ;
    cartData.forEach(
        (item) =>
       { Totalamount= Totalamount + (Number(item.price) * Number (item.quantity))
    })

    return Totalamount;
};
export default Totalamount