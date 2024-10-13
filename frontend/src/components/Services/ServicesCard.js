import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-darkColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-gray-700">{desc}</p>

      <div className="flex items-center justify-between mt-[20px]">
        <Link
          to="/doctors"
          className="w-[40px] rounded-[50%] border border-solid border-darkColor  flex item-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-9" />
        </Link>
        <span className="w-[44px] h-[44px] flex items-center justify-center text-[18px]  leadong-[600] " style={{background:`${bgColor}`, color:`${textColor}`, borderRadius:'6px 0 0 6px'}}>
            {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
