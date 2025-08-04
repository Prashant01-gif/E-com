import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../Cart/TextInput";
import Button from "../../Navbar/Btn";
import updateUserApi from "../../Api/User/updateUserApi";

const General = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const [error, setError] = useState(0);

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = data.userName || "";
    if (emailRef.current) emailRef.current.value = data.email || "";
    if (contactRef.current) contactRef.current.value = data.contactNumber || "";
  }, [data]);

  const handleUpdate = () => {
    if (nameRef.current?.value === "" || nameRef.current?.value.length < 3) {
      setError(1);
    } else if (emailRef.current?.value === "") {
      setError(2);
    } else if (
      contactRef.current?.value === "" ||
      contactRef.current?.value.length < 9
    ) {
      setError(3);
    } else {
      setError(0);
      const updatedData = {
        userName: nameRef.current.value,
        email: emailRef.current.value,
        contactNumber: contactRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-stretch bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out p-6 m-3 md:mx-10 gap-8">
      <div className="w-full md:w-[45%] px-3 space-y-6">
        <div className="text-gray-800 font-semibold text-2xl">
          General Information
        </div>
        <div className="space-y-4">
          <TextInput
            err={error === 1}
            errormessage={"Please provide a valid name"}
            label={"Name"}
            placeholder={"Enter your Name"}
            ref={nameRef}
          />
          <TextInput
            err={error === 2}
            errormessage={"Please provide a valid email"}
            label={"Email"}
            placeholder={"Enter your Email"}
            ref={emailRef}
          />
          <TextInput
            err={error === 3}
            errormessage={"Please provide a valid phone number"}
            label={"Contact Number"}
            placeholder={"Enter your Contact Number"}
            ref={contactRef}
          />
        </div>
        <div>
          <Button title={"Update"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 px-6">
        <div className="text-gray-800 font-semibold text-2xl text-center mb-3">
          Why Update?
        </div>
        <p className="text-gray-600 text-base leading-relaxed text-justify">
          Update your name, contact number, and email address from this section
          to keep your profile information up to date. Keeping your account
          details current helps ensure a smooth and secure user experience.
        </p>
      </div>
    </div>
  );
};

export default General;
