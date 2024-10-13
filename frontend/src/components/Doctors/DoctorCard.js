import React from "react";
import starIcon from "../../assets/images/star-icon-32.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const { name, avgRating, totalRating, photo, specialization, experiences } =
    doctor;

  return (
    <div className="p-3 lg:p-3">
      <div>
        <img src={photo} className="w-full rounded-[24px]" alt="" />
      </div>

      <h2 className="text-[1.6rem] leading-[30px] lg:text-[19px] lg:leading-9 text-darkColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-primaryColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 font-semibold lg:text-[16px] lg:leading-7 rounded">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-darkColor">
            <img src={starIcon} className="w-4 h-4" alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] md:hidden block leading-6 lg:text-[14px] lg:leading-7 font-[400] text-grayColor">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center  justify-between">
        <div>
          {/* <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-darkColor">
            +{totalPatients} patients
          </h3> */}
          <p className="text-[14px] leading-6 font-[400] text-gray-600">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>
        <div>
          <Link
            to={`/doctors/${doctor._id}`}
            className="w-[40px] rounded-[50%] border border-solid border-darkColor  flex item-center justify-center group hover:bg-primaryColor hover:border-none"
          >
            <BsArrowRight className="group-hover:text-white w-5 h-9" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
