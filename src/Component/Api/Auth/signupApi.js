import SecureFetch from "./ApiConfiguration";

const signupApi = async (userDetail, navigate, setStage, setUserDetail) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/signup",
    "Post",
    {
      "content-type": "application/json",
    },
    userDetail
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.response.token);
    localStorage.setItem("userDetails", JSON.stringify(response.response.user));
    window.location.href = '/'
  } else {
    setUserDetail({
      userName: "",
      contactNumber: "",
      email: "",
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(0);
  }
};
export default signupApi;