import React from "react";
import pizza from "../assets/pizza.jpg";
import logo from "../assets/logoHalf.png";
import Sauce from "./Sauce";
import Viande from "./Viande";

const Layout = () => {
  return (
    <div className=" h-[90vh] w-[60vw] bg-gradient-to-t from-beige to-slightWhite rounded-lg shadow-lg flex ">
      <div className="flex-initial w-1/4 rounded-l-lg grid justify-items-center">
        <img
          src={pizza}
          alt=""
          className="h-full w-fit object-cover object-center rounded-l-lg"
        />
        <img src={logo} alt="" className="h-32 absolute  pt-3" />
      </div>
      <div className="flex-1 w-full">
        <div className="pt-5 px-5">
          <h1 className="font-satoshi font-bold text-4xl uppercase">
            Composez votre propre pizza
          </h1>
          <p className="font-poppins font-medium text-base text-gray-500 pb-10">
            Composez une pizza de la sauce au garnitures & fromages{" "}
          </p>
          <hr />
        </div>
        <div className="my-5 flex items-start justify-end ml-5 ">
          <h1 className="font-poppins flex-1 pt-2 font-bold">Sauce</h1>
          <div className="flex-1">
            <Sauce />
          </div>
        </div>
        <hr />
        <div className="mt-5 flex items-start justify-end ml-5 ">
          <h1 className="font-poppins flex-1 pt-2 font-bold">Viande</h1>
          <div className="flex-1">
            <Viande />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
