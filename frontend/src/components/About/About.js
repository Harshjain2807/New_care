import React from "react";
import { Link } from "react-router-dom";
import aboutImg from '../../assets/images/aboutus.avif'
// import aboutCardImg from '../../assets/images/'

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] md:gap-[130px] lg:gap-0 flex-col lg:flex-row">
            <div className="relative w-3/4 md:w-1/2 lg:w-[770px] z-10 order-2 lg:order-1">
                <img className='rounded-xl p-4' src={aboutImg} alt="" />
                {/* <div className="absolute z-20 bottom-4 w-[200px]">
                    <img src={aboutCardImg} alt="" />
                </div> */}
            </div>
            <div className="w-full md:w-1/2 lg:w-[670px] order-1 md:order-2 ">
                <h2 className="heading">Proud to serve our nation</h2>
                <p className="textPara">HealthCare is a healthtech startup company that provides Aritifical Intelligence powered self care, doctor consultations and medical certificates within 60 minutes, anywhere in India.</p>
                <p className="textPara mt-[30px]">
                We're on a mission to make digital health in India more affordable, faster, and dependable. With our revolutionary AI powered doctor and patient portals, we bridge the gap between doctors and patients.
                </p>
             <Link to='/'>
             <button className="btn">Learn More</button>
             </Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
