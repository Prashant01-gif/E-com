
import Signup from './Signup/Signup';
import { useState } from 'react';
import Login from './Login/Login';


const MainAuth = () => {
  const [screen, setScreen] = useState(true);
  return (
    <div className="bg-gray-200 flex h-[100vh] justify-center items-center">
      <div className="w-80 border-none rounded-xl shadow-2xl shadow-black/50 bg-white ">
        {screen ? (
          <Signup setScreen={setScreen} />
        ) : (
          <Login setScreen={setScreen} />
        )}
      </div>
    </div>
  );
};

export default MainAuth