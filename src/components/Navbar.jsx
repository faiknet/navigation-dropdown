import React, { useState, useRef } from "react"
import {
  logo,
  menu,
  close,
  todo,
  calendar,
  planning,
  reminders,
  down,
  up,
} from "../images/"

const Navbar = () => {
  // State variable for mobile sidebar visibility
  const [isOpen, setIsOpen] = useState(false)
  // State and ref variables for dropdown menu visibility and for having them close when clicking outside
  const [companyOpen, setCompanyOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const dropDownFeatures = useRef(null)
  const dropDownCompany = useRef(null)
  //Checks to see if the dropdown menus exist and are open, and if a click event occurred outside of them. It then closes the menus.
  const closeOpenMenus = (e) => {
    // Checks to see if the user is on a small screen so the effect does not occur on the mobile sidebar
    if (window.innerWidth > 820) {
      if (
        dropDownFeatures.current &&
        featuresOpen &&
        !dropDownFeatures.current.contains(e.target)
      ) {
        setFeaturesOpen(false)
      }
      if (
        dropDownCompany.current &&
        companyOpen &&
        !dropDownCompany.current.contains(e.target)
      ) {
        setCompanyOpen(false)
      }
    }
  }
  // Used to close the Features dropdown menu
  const toggleFeaturesDropdown = () => {
    setFeaturesOpen(!featuresOpen)
  }
  // Used to close the Company dropdown menu
  const toggleCompanyDropdown = () => {
    setCompanyOpen(!companyOpen)
  }
  // Used to close the mobile sidebar
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  // Event listener to track a mouse down (click) movement which triggers the closeOpenMenus function
  document.addEventListener("mousedown", closeOpenMenus)

  return (
    <nav className="w-full flex items-center px-8 py-8 bg-almostWhite">
      <a href="#home">
        <img src={logo} alt="Logo" className="mr-11 hover:opacity-80" />
      </a>
      <ul className="list-none sm:flex hidden flex-1 px-1 font-epilogue font-medium">
        <li className="navbar font-epilogue flex font-medium cursor-pointer text-[18px]">
          <a
            onClick={toggleFeaturesDropdown}
            ref={dropDownFeatures}
            className={`flex mx-4 opacity-100 hover:opacity-70 ${
              featuresOpen ? "text-medGray" : "text-black"
            }`}
            href="#Features"
          >
            Features
            <img
              src={featuresOpen ? up : down}
              className="w-[10px] h-[6px] mt-2 ml-2"
            />
          </a>
          <ul
            className={`list-none ${
              featuresOpen ? "block" : "hidden"
            } absolute bg-almostWhite rounded-xl shadow-lg py-6 px-6 left-[110px] top-20`}
          >
            <li className="mb-2">
              <a
                href="#todo"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                <img src={todo} className="imageDropdown" />
                Todo List
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#calendar"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                <img src={calendar} className="imageDropdown" />
                Calendar
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#reminders"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                <img src={reminders} className="imageDropdown" />
                Reminders
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#planning"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                <img src={planning} className="imageDropdown" />
                Planning
              </a>
            </li>
          </ul>

          <a
            onClick={toggleCompanyDropdown}
            className={`flex mx-4 opacity-100 hover:opacity-70 ${
              companyOpen ? "text-medGray" : "text-black"
            }`}
            href="#Company"
            ref={dropDownCompany}
          >
            Company
            <img
              src={companyOpen ? up : down}
              className="w-[10px] h-[6px] mt-2 ml-2"
            />
          </a>
          <ul
            className={`list-none ${
              companyOpen ? "block" : "hidden"
            } fixed bg-almostWhite rounded-xl shadow-lg py-6 px-6 left-[290px] top-20`}
          >
            <li className="mb-2">
              <a
                href="#history"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                History
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#team"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                Our Team
              </a>
            </li>

            <li className="mb-2">
              <a
                href="#blog"
                className="textDropdown opacity-100 hover:opacity-70"
              >
                Blog
              </a>
            </li>
          </ul>

          <a className="mx-4 opacity-100 hover:opacity-70" href="#Careers">
            Careers
          </a>
          <a className="mx-4 opacity-100 hover:opacity-70" href="#Careers">
            About
          </a>
        </li>
      </ul>

      {/* navbar buttons */}
      <div className="font-epilogue font-medium text-[16px] sm:flex hidden items-center flex-1 justify-end ">
        <button
          type="button"
          className="px-8 hover:opacity-80 active:opacity-50"
        >
          Login
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-black hover:bg-black hover:text-almostWhite active:bg-almostWhite active:text-black"
        >
          Register
        </button>
      </div>

      {/* mobile responsive navbar menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          alt="Menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={toggleMenu}
          style={{ zIndex: 2 }}
        />
      </div>

      {/* mobile background black-out div */}
      <div
        onClick={toggleMenu}
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-black opacity-60 sm:hidden`}
      ></div>

      {/* mobile sidebar */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:hidden bg-almostWhite xxs:w-[80%] xs:w-[50%] w-full fixed top-0 right-0 h-screen sidebar`}
        style={{ zIndex: 1 }}
      >
        <ul className="list-none sm:flex mt-[40%] mr-20 items-center flex-1 px-10 font-epilogue font-medium ">
          <li
            className={`font-epilogue font-medium cursor-pointer text-[18px] flex flex-col`}
          >
            <a
              onClick={toggleFeaturesDropdown}
              className={`flex mb-4 ${
                featuresOpen ? "text-medGray" : "text-black"
              }`}
              href="#Features"
            >
              Features
              <img
                src={featuresOpen ? up : down}
                className="w-[10px] h-[6px] mt-2 ml-2"
              />
            </a>
            <ul
              className={`list-none ${
                featuresOpen ? "block" : "hidden"
              } relative ml-8 mt-4 mb-4`}
            >
              <li className="mb-2">
                <a href="#todo" className="textDropdown">
                  <img src={todo} className="imageDropdown" />
                  Todo List
                </a>
              </li>

              <li className="mb-2">
                <a href="#calendar" className="textDropdown">
                  <img src={calendar} className="imageDropdown" />
                  Calendar
                </a>
              </li>

              <li className="mb-2">
                <a href="#reminders" className="textDropdown">
                  <img src={reminders} className="imageDropdown" />
                  Reminders
                </a>
              </li>

              <li className="mb-2">
                <a href="#planning" className="textDropdown">
                  <img src={planning} className="imageDropdown" />
                  Planning
                </a>
              </li>
            </ul>

            <a
              onClick={toggleCompanyDropdown}
              className={`flex mb-4 ${
                companyOpen ? "text-medGray" : "text-black"
              }`}
              href="#Company"
            >
              Company
              <img
                src={companyOpen ? up : down}
                className="w-[10px] h-[6px] mt-2 ml-2"
              />
            </a>
            <ul
              className={`list-none ${
                companyOpen ? "block" : "hidden"
              } relative ml-8 mt-4 mb-4`}
            >
              <li className="mb-2">
                <a href="#history" className="textDropdown">
                  History
                </a>
              </li>

              <li className="mb-2">
                <a href="#team" className="textDropdown">
                  Our Team
                </a>
              </li>

              <li className="mb-2">
                <a href="#blog" className="textDropdown">
                  Blog
                </a>
              </li>
            </ul>

            <a className="mb-4" href="#Careers">
              Careers
            </a>
          </li>
          <li className="font-epilogue font-medium cursor-pointer text-[18px]">
            <a className="mt-4" href="#About">
              About
            </a>
          </li>

          <div className="font-epilogue font-medium text-[16px] flex flex-col sm:hidden justify-center relative top-4">
            <button type="button" className="py-4 active:opacity-50">
              Login
            </button>
            <button
              type="button"
              className="py-2 px-20 rounded-lg border border-black active:bg-black active:text-almostWhite"
            >
              Register
            </button>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
