const ProductDataApi = async (setProductData,setMainData)=>{
        const request  = await fetch("https://dummyjson.com/recipes");
        const response = await request.json();
        
        if(request.status == 200){
            setProductData(response.recipes);
            setMainData(response.recipes);
            
        }

};
export default ProductDataApi;