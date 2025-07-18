import React from "react";

const CheckOutModal = ({ visible, setVisible }) => {
  return (
    <div
      className={`${visible ? "flex" : "hidden" } fixed inset-0 bg-black h-[100vh] w-[100vw]`}
      onClick={() => setVisible(false)}
    ></div>
  );
};

export default CheckOutModal;
