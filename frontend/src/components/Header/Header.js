import { useEffect, useRef, useContext } from "react";
// import userImg from "../../assets/images/images.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Consult a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();

    return () => window.removeEventListener("scroll", stickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header
      className="w-full header h-13 container items-center py-2 bg-blue-500 flex justify-between px-5 md:px-4"
      ref={headerRef}
    >
      <div className=" text-[1.7rem] lg:text-3xl text-darkColor font-[900]">
        + HealthCare
      </div>
      <div className="nav" ref={menuRef} onClick={toggleMenu}>
        <ul className="menu flex item-center gap-[2.7rem]">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={(navClass) =>
                  navClass.isActive
                    ? "text-primaryColor text-[18px]  leading-7 font-[600]"
                    : "text-darkColor text-[18px] font-[600] leading-7 hover:text-grayColor"
                }
              >
                {link.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        {token && user ? (
          <div className="flex items-center pt-2   justify-center">
            <Link to={`${role==='doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
              <figure className="   cursor-pointer rounded-r-full">
                <img className="w-[70px] h-[70px] me-5 rounded-full" src={user?.photo} alt="" />
              </figure>

              {/* <h2 className="text-[1.3rem] mt-1 me-3 lg:text-2xl text-darkColor  ">{user?.name}</h2> */}
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-primaryColor text-white font-[700] h-[44px] flex items-center justify-center rounded-xl  px-4 mx-3">
              Login
            </button>
          </Link>
        )}

        <span className="md:hidden " onClick={toggleMenu}>
          <BiMenu className="w-6 h-6  cursor-pointer" />
        </span>
      </div>
    </header>
  );
};

export default Header;
