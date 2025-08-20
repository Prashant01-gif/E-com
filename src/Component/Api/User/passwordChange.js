import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const passwordChange = async (updatedData) => {
  try {
    const request = await SecureFetch(
      mainEndPoint+ "user/",
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );

    const response = await request.json();

    if (request.status === 200) {
      console.log("Password change successful:", response);
      alert("Password changed successfully");
      window.location.href = "/";
    } else {
      alert(response.message || "Password change failed");
    }
  } catch (error) {
    console.error("Error changing password:", error);
    alert("An error occurred while changing the password");
  }
};

export default passwordChange;
