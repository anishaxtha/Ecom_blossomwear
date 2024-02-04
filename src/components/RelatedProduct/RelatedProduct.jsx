import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProduct = () => {
  return (
    <div className="related-product flex flex-col items-center gap-2 h-[80vh]">
      <h1 className="text-[#2c9fd1] text-4xl font-semibold">Related Product</h1>
      <hr />
      <div className="items mt-10 flex gap-7">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
