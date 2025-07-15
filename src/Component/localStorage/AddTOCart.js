const AddToCart = (productData) =>{
    let tempData = localStorage.getItem("cart");
   

    if(tempData == null){
         let tempArray = [];
        tempArray.push(productData);
        localStorage.setItem("cart", JSON.stringify(tempArray)) ;
        console.log(te);
        
    }
    else{
      
         let tempArray = JSON.parse(localStorage.getItem("cart"));
         tempArray.push(productData);
         localStorage.setItem("cart" ,JSON.stringify(tempArray));
    }
};

export default AddToCart;