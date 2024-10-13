import React from "react";
import docImage1 from "../assets/images/07.jpg";
import icon01 from "../assets/images/04.jpg";
import icon02 from "../assets/images/location.png";
import icon03 from "../assets/images/02.png";
import featureImg from "../assets/images/06.jpg";
import faqImg from "../assets/images/08.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import About from "../components/About/About";
import Testomonial from "../components/Testomonial/Testomonial";

const Home = () => {
  return (
    <>
      <section className="hero_section px-1 pt-[30px] 2xl:h-[800]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[60px] items-center justify-between">
            <div>
              <div className="lg:w-[500px]">
                <h1 className="text-[39px] leading-[46px] text-darkColor font-[800]  md:text-[60px] md:leading-[70px]">
                  Live a healthy and long life.
                </h1>
                <p className="textPara">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae quisquam obcaecati libero, praesentium aliquam
                  dicta? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Minima, tempore.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="mt-[30px] lg:mt-[50px] flex flex-col lg:flex-row lg:items-center gap-5  lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700] text-darkColor">
                    500+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Users</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700] text-darkColor">
                    300+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Specialists</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[40px] lg:leading-[54px] font-[700] text-darkColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-primaryColor rounded-full block mt-[-14px]"></span>
                  <p className="textPara">Patient Recovery</p>
                </div>
              </div>
            </div>
            <div className="md:w-[400px] hidden md:block gap-[20px] items-center justify-end">
              <div>
                <img
                  className="md:w-[400px] h-[460px] mb-[30px] rounded-[34px]"
                  src={docImage1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className=" text-[2.0rem] font-[700] md:heading  text-center">
              Providing best features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="h-[150px] " src={icon01} alt="" />
              </div>
              <div className="mt-[20px] ">
                <h2 className="text-[26px] leading-3 text-darkColor font-[700] text-center ">
                  Consult a Doctor
                </h2>
                <Link
                  to="/doctors"
                  className="w-[40px] rounded-[50%] border border-solid border-darkColor mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-9" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="h-[150px] " src={icon02} alt="" />
              </div>
              <div className="mt-[20px] ">
                <h2 className="text-[26px] leading-3 text-darkColor font-[700] text-center ">
                  Find a Location
                </h2>
                <Link
                  to="/doctors"
                  className="w-[40px] rounded-[50%] border border-solid border-darkColor mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-9" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img className="h-[150px] " src={icon03} alt="" />
              </div>
              <div className="mt-[20px] ">
                <h2 className="text-[26px] leading-3 text-darkColor font-[700] text-center ">
                  Appointments
                </h2>
                <Link
                  to="/doctors"
                  className="w-[40px] rounded-[50%] border border-solid border-darkColor mt-[30px] mx-auto flex item-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-9" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
 
        <div className="mx-10">
          <h2 className=" text-[2.0rem] font-[700] md:heading  text-center">
            About Us
          </h2>
          <About />
        </div>
 

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
          </div>

          <ServicesList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="lg:w-[670px] ">
              <h2 className="heading">
                Get virtual treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="textPara">
                  1. Schedule the appointment directly.
                </li>
                <li className="textPara">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="textPara">
                  3. View our physician who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 lg:-w[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                className="w-[380px] h-[380px] rounded-[34px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[480px] mx-auto">
            <h2 className="heading text-center">Our Specialist Doctors</h2>
          </div>
          <DoctorList />
        </div>
      </section>

      <section>
        <div className="container">
          <div
            className="flex justify-between
          gap-[40px] lg:gap-0"
          >
            <div className="w-1/2   hidden md:block">
              <img
                src={faqImg}
                className="rounded-[34px] w-[400px] h-[550px]"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions asked by our patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[480px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
          </div>
          <Testomonial />
        </div>
      </section>
      <div className="bg-gray-700 h-[2px] w-[100vw]"></div>
    </>
  );
};
export default Home;
