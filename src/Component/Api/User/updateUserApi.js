import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const updateUserApi = async (updatedData) => {
  const request = await SecureFetch(
    mainEndPoint+ "user/userDetails",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    updatedData
  );

  const response = await request.json();
  if (request.status == 200) {
    console.log("request", response);
    localStorage.setItem("userDetail", JSON.stringify(response.user));
    alert("Profile updated sucessfully");
  }
};
export default updateUserApi;