import React, { useState } from "react";
import Loading from "../../components/Loading/Loading";
// import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFatchData";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import starIcon from "../../assets/images/star-icon-32.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import Profile from "./Profile";
import Appointments from "./Appointments";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");
  const {
    data: docData,
    loading,
    // error,
  } = useGetProfile(`${BASE_URL}/doctors/profile/me`);

  console.log(docData, "docData");

  return (
    <section className="px-[90px]">
      <div className="max-w-[1024]  px-15 mx-auto ">
        {loading && <Loading />}
        {/* {!loading && <Error />} */}

      
          <div className="grid lg:grid-cols-3 h-[100%] gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-center gap-4 pb-[120px]">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={docData.photo} className="w-full" alt="" />
                      </figure>
                      <div className="mb-10">
                        <span className="bg-[#ccf0f3] text-blueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
                          {docData.specialization}
                        </span>
                        <h3 className="text-[22px] leading-9 font-bold text-darkColor mt-3">
                          {docData.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-darkColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            <img src={starIcon} className="w-4 h-4" alt="" />
                            {docData.averageRating}
                          </span>
                          <span className="text-gray-700 text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                            {docData.totalRating}
                          </span>
                        </div>
                        <p className="textPara font-[15px] lg:max-w-[390px] leading-6">
                          {docData?.bio}
                        </p>
                      </div>
                    </div>
                    <DoctorAbout
                      name={docData.name}
                      about={docData.about}
                      qualifications={docData.qualifications}
                      experiences={docData.experiences}
                    />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appointments appointments={docData.appointments} />
                )}
                {tab === "settings" && <Profile doctorData={docData} />}
              </div>
            </div>
          </div>
     
      </div>
    </section>
  );
};

export default Dashboard;
