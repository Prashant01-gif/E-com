import mainEndPoint from "./User/mainEndPoint";

const ProductDataApi = async (setProductData)=>{
        const request  = await fetch( mainEndPoint+ "product");
        const response = await request.json();
       
        if(request.status == 200){
            setProductData(response.data);
           
            
        }

};
export default ProductDataApi;