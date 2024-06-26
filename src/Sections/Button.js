import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoMoon } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
// import { BsCart3 } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import logo from "../assets/images/beats-logo-161616.png";
import AOS from "aos";
import "aos/dist/aos.css";
import CartModal from "./CartModal";
AOS.init();


const Button = () => {
  //browser darkmode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //opening the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  //maually chnaging to darkmode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //dropdown close button
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="xl:hidden relative flex gap-4 ">
      <CartModal/>
      <div>
        <button className="flex justify-end" onClick={toggling}>
          <RiMenu4Line size={26} />
        </button>
      </div>

      {isOpen && (
        <div 
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="ease-in-out"
        
        className="fixed  top-0 left-0 w-full h-screen dark:bg-[#191A1A] bg-[#FFFAFA] p-10">
          <div className="flex justify-center items-center  ">
            <img
              src={logo}
              alt=""
              className="h-[2rem] md:h-[3rem] m-2 drop-shadow-lg dark:bg-white dark:rounded-[2.2rem] absolute top-2 left-2"
            />
            <IoClose
              size={35}
              className="absolute m-2 top-2 right-2 cursor-pointer"
              onClick={toggleDropdown}
            />

            <ul className="text-black w-[10rem] h-screen flex flex-col justify-center items-center gap-4 font-bold">
              <a href="#home">
                <li
                  key="home"
                  onClick={toggleDropdown}
                  className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Home
                </li>
              </a>
              <a href="#specs">
                <li
                  key="specs"
                  onClick={toggleDropdown}
                  className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  <span>S</span><span>p</span><span>e</span><span>c</span><span>s</span>
                </li>
              </a>
              <a href="#case">
                <li
                  key="case"
                  onClick={toggleDropdown}
                  className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Case
                </li>
              </a>
              <a href="#products">
                <li
                  key="product"
                  onClick={toggleDropdown}
                  className="hover:text-bold dark:hover:text-[#B1522E] hover:text-[#B1522E] dark:text-white scale-110 font-mono text-[1.5rem] leading-loose"
                >
                  Product
                </li>
              </a>

              <button onClick={handleThemeSwitch}>
                {theme === "dark" ? (
                  <CiLight size={26} fill="white" />
                ) : (
                  <IoMoon size={24} className="" />
                )}
              </button>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
