import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[350px] hover:scale-105 hover:duration-600">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className="my-6 mx-0">{props.name}</p>
      <div className="flex gap-20">
        <div className="text-[#374151] text-[18px] font-semibold">
          ${props.new_price}
        </div>
        <div className="text-[#8c8c8c] text-[18px] font-medium  line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
