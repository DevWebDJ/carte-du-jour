import React from "react";
import pizza from "../assets/pizza.jpg";
import logo from "../assets/logoHalf.png"

const Layout = () => {
  return (
    <div className=" h-[90vh] w-[80vw] bg-gradient-to-t from-beige to-slightWhite rounded-lg shadow-lg flex">
      <div className="flex-initial w-1/4 rounded-l-lg grid justify-items-center">
        <img src={pizza} alt="" className="h-full w-fit object-cover object-center rounded-l-lg" />
        <img src={logo} alt="" className="h-32 absolute  pt-3" />
      </div>
      <div className="flex-1 w-full">
        <div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
