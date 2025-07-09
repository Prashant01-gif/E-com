const ProductDataApi = async ()=>{
        const request  = await fetch("https://dummyjson.com/recipes");
        const response = request.json();

        console.log("GULLY",response);

}
export default ProductDataApi;