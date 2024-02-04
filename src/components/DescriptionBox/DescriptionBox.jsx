import React from "react";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox my-12 mx-20">
      <div className="navigator flex">
        <div className="nav-box flex items-center justify-center text-[16px] font-semibold w-[170px] h-[70px] border-1 border-solid border-[#d0d0d0]">
          Description
        </div>
        <div className="nav-box fade bg-[#fbfbfb] text-[#555] flex items-center justify-center text-[16px] w-[170px] border-1 border-solid border-[#d0d0d0]">
          Reviews (122)
        </div>
      </div>
      <div className="description flex flex-col gap-10 p-10 pb-10 border-1 border-solid border-[#D0D0D0]">
        <p>
          E-commerce refers to the process of electronically buying or selling
          goods or services on online services or over the internet. It involves
          various technologies such as mobile commerce, electronic funds
          transfer, supply chain management, internet marketing, and online
          transaction processing.
        </p>
        <p>
          E-commerce businesses generate revenue from selling products or
          services online, such as software, apparel, housewares, or web design
          services. They can be run from a single website or through multiple
          online channels like social media and email.1 E-commerce encompasses a
          wide variety of data, systems, and tools for online buyers and
          sellers, including mobile shopping and online payment encryption.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
