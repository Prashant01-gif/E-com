import React, { useRef } from "react";
import TextInput from "../../Cart/TextInput";
import Button from "../../Navbar/Btn";
import passwordChange from "../../Api/User/passwordChange";

const Password = () => {
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();

  const handleUpdate = () => {
    const prev = prevPasswordRef.current.value.trim();
    const current = currentPasswordRef.current.value.trim();

    if (!prev || !current) {
      alert("Please fill in both password fields");
      return;
    }

    const updatedData = {
      prevPassword: prev,
      currentPassword: current,
    };

    passwordChange(updatedData);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-stretch bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out p-6 m-3 md:mx-10 gap-8">
      <div className="w-full md:w-[45%] px-3 space-y-6">
        <div className="text-gray-800 font-semibold text-2xl">
          Change Password
        </div>
        <div className="space-y-4">
          <TextInput
            errormessage={"Please provide old password"}
            label={"Old Password"}
            placeholder={"Enter your old password"}
            ref={prevPasswordRef}
          />
          <TextInput
            errormessage={"Please provide a valid new password"}
            label={"New Password"}
            placeholder={"Enter your new password"}
            ref={currentPasswordRef}
          />
        </div>
        <div className="pt-2">
          <Button title={"Update"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 px-6">
        <div className="text-gray-800 font-semibold text-2xl text-center mb-3">
          Why Update?
        </div>
        <p className="text-gray-600 text-base leading-relaxed text-justify">
          Keep your account secure by updating your password regularly. Use this
          section to change your current password to a new one. Make sure your
          new password is strong and unique to protect your personal information
          and prevent unauthorized access to your account.
        </p>
      </div>
    </div>
  );
};

export default Password;
