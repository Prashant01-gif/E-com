import React, { useRef, useState } from 'react'
import TextInput from './TextInput'
import Button from '../Navbar/Btn';
import { useNavigate } from 'react-router';

const Userdetails = () => {
 const navigate = useNavigate();
  const [error, setError] = useState(null);

  const name = useRef();
  const contact = useRef();
  const address = useRef();

  const handleClick = () => {
    const nameVal = name.current.value.trim();
    const contactVal = contact.current.value.trim();
    const addressVal = address.current.value.trim();

    console.log("Name:", nameVal);
    console.log("Contact:", contactVal);
    console.log("Address:", addressVal);

    const nameRegex = /^[a-zA-Z\s]{2,30}$/;  // letters & spaces, 2–30 chars
    const contactRegex = /^[0-9]{7,15}$/;   // digits only, 7–15 digits
    const addressRegex = /^.{5,100}$/;      // any character, 5–100 chars

    if (!nameRegex.test(nameVal)) {
      setError(1);
    } else if (!contactRegex.test(contactVal)) {
      setError(2);
    } else if (!addressRegex.test(addressVal)) {
      setError(3);
    } else {
      setError(0);
      console.log("✅ All inputs valid!");
      alert("Order placed Successfully")
      localStorage.removeItem('cart')
      navigate("/");
    }
  };

  return (
    <div className="space-y-4">
      <TextInput placeholder="Enter your name" name="Name" ref={name} />
      {error === 1 && <p className="text-red-500 text-sm flex justify-center">Invalid name</p>}

      <TextInput placeholder="Enter your contact" name="Contact" ref={contact} />
      {error === 2 && <p className="text-red-500 text-sm lex justify-center ">Invalid contact number</p>}

      <TextInput placeholder="Enter your address" name="Address" ref={address} />
      {error === 3 && <p className="text-red-500 text-sm lex justify-center">Invalid address</p>}

      <div className="flex justify-center mt-3 mr-[150px]">
        <Button title="Proceed" onClick={handleClick} />
      </div>
    </div>
  );
}; 

export default Userdetails;
