import React, { useEffect, useRef, useState } from "react";
import TextInput from "../../Cart/TextInput";
import Button from "../../Navbar/Btn";
import updateUserApi from "../../Api/User/updateUserApi";

const Location = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();
  const [error, setError] = useState(0);

  useEffect(() => {
    if (cityRef.current) cityRef.current.value = data.city || "";
    if (streetRef.current) streetRef.current.value = data.street || "";
    if (deliveryDescriptionRef.current)
      deliveryDescriptionRef.current.value = data.deliveryDescription || "";
  }, [data]);

  const handleUpdate = () => {
    if (cityRef.current?.value === "") {
      setError(1);
    } else if (streetRef.current?.value === "") {
      setError(2);
    } else if (deliveryDescriptionRef.current?.value === "") {
      setError(3);
    } else {
      setError(0);
      const updatedData = {
        city: cityRef.current.value,
        street: streetRef.current.value,
        deliveryDescription: deliveryDescriptionRef.current.value,
      };
      updateUserApi(updatedData);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-stretch bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out p-6 m-3 md:mx-10 gap-8">
      <div className="w-full md:w-[45%] px-3 space-y-6">
        <div className="text-gray-800 font-semibold text-2xl">
          Delivery Information
        </div>
        <div className="space-y-4">
          <TextInput
            err={error === 1}
            errormessage={"Please provide a valid city"}
            label={"City"}
            placeholder={"Enter your City"}
            ref={cityRef}
          />
          <TextInput
            err={error === 2}
            errormessage={"Please provide a valid street"}
            label={"Street"}
            placeholder={"Enter your Street"}
            ref={streetRef}
          />
          <TextInput
            err={error === 3}
            errormessage={"Please provide delivery description"}
            label={"Delivery Description"}
            placeholder={"Enter your Delivery description"}
            ref={deliveryDescriptionRef}
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
          In this section, you can add or update your delivery details to ensure
          your orders reach you without any issues. Include accurate information
          such as your street address, city, and any specific delivery
          instructions or landmarks. Keeping this information up to date helps
          us deliver your items faster and more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Location;
