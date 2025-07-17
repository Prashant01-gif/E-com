const AddToCart = (productData) =>{
    let tempData = localStorage.getItem("cart");
   

    if(tempData == null){
         let tempArray = [];
     tempArray.push({...productData, quantity: 1 }); 
        localStorage.setItem("cart", JSON.stringify(tempArray)) ;
        
        
    }
    else{
      
         let tempArray = JSON.parse(localStorage.getItem("cart"));
         tempArray.push({...productData, quantity: 1});
         localStorage.setItem("cart" ,JSON.stringify(tempArray));
    }
};

export default AddToCart;