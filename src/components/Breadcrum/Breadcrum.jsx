import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum text-[20px] flex items-center gap-2 font-medium ml-20 mt-10">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}{" "}
      <img src={arrow_icon} alt="" />
    </div>
  );
};

export default Breadcrum;
