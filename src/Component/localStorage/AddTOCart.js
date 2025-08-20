const addToCart = (productData) => {
  let localData = localStorage.getItem("cart");

  if (localData == null) {
    const tempArr = [{ ...productData, quantity: 1 }];
    localStorage.setItem("cart", JSON.stringify(tempArr));
  } else {
    const tempArr = JSON.parse(localData);
    const existingIndex = tempArr.findIndex(
      (item) => item._id === productData._id
    );

    if (existingIndex !== -1) {
      tempArr[existingIndex].quantity += 1;
    } else {
      tempArr.push({ ...productData, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(tempArr));
  }
};

export default addToCart;
