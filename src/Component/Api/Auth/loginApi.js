import mainEndPoint from "../User/mainEndPoint";
import SecureFetch from "./ApiConfiguration";

const loginApi = async (userInfo, navigate, setErr) => {
  const request = await SecureFetch(
    mainEndPoint+ "user/login",
    "Post",
    {
      "content-type": "application/json",
    },
    userInfo
  );
  const response = await request.json();
  if (request.status == 200) {
    console.log("response", response);
    localStorage.setItem("token", response.token);
    localStorage.setItem("userDetail", JSON.stringify(response.user));
    window.location.href = "/";
  } else {
    setErr(3);
  }
};
export default loginApi;