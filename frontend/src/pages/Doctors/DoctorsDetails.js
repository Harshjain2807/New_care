import React, { useState } from "react";
// import doctorImg from "../../assets/images/doctor-img02.jpg";
import starIcon from "../../assets/images/star-icon-32.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanal from "./SidePanal";
import { BASE_URL } from "./../../config";
import useFatchData from "./../../hooks/useFatchData";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import { useParams } from "react-router-dom";

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");

  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFatchData(`${BASE_URL}/doctors/${id}`);

  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    charges,
    photo,
  } = doctor;

  return (
    <section>
      <div className="max-w-[1024px]  px-5 mx-auto ">
        {loading && <Loading />}
        {error && <Error />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[250px] max-h-[350px]">
                  <img
                    src={photo}
                    alt=""
                    className="w-full rounded-xl h-[300px]"
                  />
                </figure>

                <div className="h-[200px]">
                  <span className="bg-[#CCF0F3] text-[#1ec9f8] py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                  </span>
                  <h3 className="text-darkColor text-[22px] leading-9 mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-darkColor">
                      <img src={starIcon} alt="" className="w-4 h-4" />{" "}
                      {averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-gray-600">
                      {totalRating}
                    </span>
                  </div>

                  <p className="textPara text-[14px] md:text-[15px] leading-5 lg:max-w-[390px] ">
                    {bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={` ${
                    tab === "about" &&
                    "border-b border-solid border-b-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-darkColor font-semibold`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab("feedback")}
                  className={` ${
                    tab === "feedback" &&
                    "border-b border-solid border-b-primaryColor"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-darkColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px]">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            <div>
              <SidePanal
                doctorId={doctor._id}
                charges={charges}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorsDetails;
