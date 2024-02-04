import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay flex h-[80vh] ml-20 mr-18">
      <div className="productdisplay-left flex gap-4">
        <div className="productdisplay-img-list flex flex-col gap-2 mt-7">
          <img src={product.image} alt="" className="h-[155px] w-[200px]" />
          <img src={product.image} alt="" className="h-[155px] w-[200px]" />
          <img src={product.image} alt="" className="h-[155px] w-[200px]" />
          <img src={product.image} alt="" className="h-[155px] w-[200px]" />
        </div>
        <div className="productdisplay-img">
          <img
            className="main-img w-[750px] h-[640px] mt-7"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right flex flex-col ml-7 mt-7">
        <h1 className="font-medium text-[40px]">{product.name}</h1>
        <div className="star flex items-center  gap-1 text-[18px] mt-3">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices flex gap-7 text-xl font-medium mt-7">
          <div className="old-price text-[#f7b030] line-through">
            ${product.old_price}
          </div>
          <div className="new-price text-[#eb423f]">${product.new_price}</div>
        </div>
        <div className="description mt-7 text-[20px]">
          A lightweight, usually knitted, pullover shirt, close-fitting and a
          round neckline short sleeves, worn as a undershirt or outer garment.
        </div>
        <div className="size">
          <h1 className="mt-[20px] font-bold text-xl">Select Size</h1>
          <div className="sizes flex gap-5 mt-7">
            <div className="px-6 py-18 bg-[#fbfbfb] border-1 border-solid border-[#efefef] rounded-[3px] cursor-pointer">
              S
            </div>
            <div className="px-6 py-18 bg-[#fbfbfb] border-1 border-solid border-[#efefef] rounded-[3px] cursor-pointer">
              M
            </div>
            <div className="px-6 py-18 bg-[#fbfbfb] border-1 border-solid border-[#efefef] rounded-[3px] cursor-pointer">
              L
            </div>
            <div className="px-6 py-18 bg-[#fbfbfb] border-1 border-solid border-[#efefef] rounded-[3px] cursor-pointer">
              XL
            </div>
            <div className="px-6 py-18 bg-[#fbfbfb] border-1 border-solid border-[#efefef] rounded-[3px] cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <p className="category mt-7 text-[18px]">
          <span>
            <strong>Category: </strong>
          </span>
          Men, Women, T-shirt, Crop Top
        </p>
        <p className="category mt-7 text-[18px]">
          <span>
            <strong>Tags: </strong>
          </span>
          Modern, Latest
        </p>
        <button
          className="flex justify-center items-center gap-4 w-[190px] h-[70px] mt-12 bg-[#eb423f] text-white text-[20px] rounded-[3px] "
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
