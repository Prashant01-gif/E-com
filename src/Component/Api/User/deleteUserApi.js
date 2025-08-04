import SecureFetch from "../Auth/ApiConfiguration";

const deleteUserApi = async (updatedData) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/",
    "DELETE",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    updatedData
  );

  const response = await request.json();
  if (request.status == 200) {
    console.log("request", response);
    alert("Password Change sucessfully");
    window.location.href = "/";
  }
};
export default deleteUserApi;