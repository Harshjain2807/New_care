import React from "react";
import { Link } from "react-router-dom";

import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com/channel/UCvSLirAbvkFJyTVbOoErmbQ",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/channel/UCvSLirAbvkFJyTVbOoErmbQ",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/_harshjain_786/",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com/channel/UCvSLirAbvkFJyTVbOoErmbQ",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request ",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-[#202020]  pb-16 pt-10 ">
      <div className="container">
        <div className="flex justify-evenly flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="w-[40%] md:block hidden">
            <div className=" text-xl lg:text-3xl text-white font-[900]">
              + HealthCare
            </div>
            <p className="text-[16px] leading-7 font-[400] text-white">
              Copyright @ {year} developed by Harsh Jain all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  className="h-9 w-9 bg-white border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  to={link.path}
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Quick Links
            </h2>

            <ul className="">
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              I want to:
            </h2>

            <ul className="">
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white">
              Support
            </h2>

            <ul className="">
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4 ">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-[100%] md:hidden blocks">
            <div className=" text-2xl lg:text-3xl text-white font-[900]">
              + HealthCare
            </div>
            <p className="text-[16px] leading-7 font-[400] text-white">
              Copyright @ {year} developed by Harsh Jain all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  className="h-9 w-9 bg-white border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                  to={link.path}
                  key={index}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
