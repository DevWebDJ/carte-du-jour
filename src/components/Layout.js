import React from "react";
import pizza from "../assets/pizzaprep.jpg";

const Layout = () => {
  return (
    <div className=" h-[90vh] w-[80vw] bg-gradient-to-t from-beige to-slightWhite rounded-lg shadow-lg flex">
      <div>
        <img src={pizza} alt="" className="h-full flex-1 w-1/4 object-cover object-center rounded-l-lg" />
      </div>
    </div>
  );
};

export default Layout;
