import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux'

function Header() {
  const [border, setBorder] = useState(false);
  const navigate = useNavigate();
  const {cartItems} = useSelector(state=>state.cart)

  const clickedHome = () => {
    setBorder(false);
    navigate("/");
  };

  const clickedCart = () => {
    setBorder(true);
    navigate("/Cart");
  };

  return (
    <div className="bg-slate-200 flex md:px-10 md:text-base border-b w-full fixed border-black/20 justify-between px-4 uppercase p-2 items-center shadow-md">
      <div className=" font-bold text-2xl  text-rose-500  tracking-widest">
        mynt<span className="text-blue-900">ra</span>
      </div>
      <div className="flex space-x-5 mr-2 font-semibold font-mono text-[#000]">
        <button
          className={border ? "" : "border-rose-500  border-b-2"}
          onClick={() => clickedHome()}
        >
          <p className="tracking-widest">HOME</p>
        </button>
        <button
          className={border ? "border-rose-500  border-b-2" : ""}
          onClick={() => clickedCart()}
        >
          <p className="tracking-widest">CART</p>

          <p className="">{cartItems.lenght}</p>

        </button>
      </div>
    </div>
  );
}

export default Header;
