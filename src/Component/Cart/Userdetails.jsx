import React, { useRef, useState } from 'react'
import TextInput from './TextInput'
import Button from '../Navbar/Btn';

const Userdetails = () => {
    const [error, setError] = useState();
    const name= useRef();
    const contact= useRef();
    const address= useRef();
    const handleClick= ()=>{
        console.log("name" , name.current.value)
        console.log("contact", contact.current.value)
        console.log("Address", address.current.value)
        if(name.current.value == null){
            setError(1)
            
        }
        else if(contact.current.value == null){
            setError(2)
        }
        else if(address.current.value == null){
            setError(3)
        }
        else{
          setError(0)
        }
    
     
    }
  return (
    <div>
        <TextInput placeholder={"Enter your name"} name={"Name"} ref={name}/>
         <TextInput placeholder={"Enter your contact"} name={"Contact"} ref={contact}/>
         <TextInput placeholder={"Enter your Address"} name={"Address"} ref={address}/>
       
         
      <div  className="flex justify-center mr-[150px] mt-3 px-4 max-w-full sm:max-w-lg md:max-w-xl mx-auto">
  <Button title={"Proceed"} onClick={handleClick} />
</div>
         </div>
 
  )
}

export default Userdetails