import React from "react"
import { hero, heroMobile, databiz, meet, maker, audiophile } from "../images"

const Hero = () => {
  return (
    <section className="bg-almostWhite flex sm:justify-start justify-center">
      <div className="flex flex-col">
        <div className="sm:hidden flex flex-col w-full -order">
          <img src={heroMobile} alt="Hero image" className="w-full mx-0 mb-6" />
        </div>
        <div className="flex-col flex sm:text-left text-center mx-[30%] mt-[10%]">
          <h1 className="font-epilogue font-bold sm:text-6xl text-4xl">
            Make <br className="sm:flex hidden" />
            remote work
          </h1>

          <p className="font-epilogue font-medium text-[18px] mt-8 sm:min-w-[425px] min-w-[0px] sm:max-w-[465px] max-w-[100%]">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <div className="flex sm:justify-start justify-center mt-10 mb-10">
            <button
              type="button"
              className="font-epilogue font-bold items-center justify-center max-w-[160px] bg-almostBlack text-almostWhite py-4 px-7 rounded-xl hover:bg-almostWhite hover:text-black hover:border active:bg-black active:text-almostWhite"
              onClick={() => window.open("https://google.com", "_blank")}
            >
              Learn more
            </button>
          </div>

          <div className="bg-almostWhite flex flex-nowrap  items-center justify-between sm:mt-[30%] mt-3 mb-[20%]">
            <img className="w-[114px] h-[20px] px-2" src={databiz} />
            <img className="w-[73px] h-[36px] px-2" src={audiophile} />
            <img className="w-[90px] h-[20px] px-2" src={meet} />
            <img className="w-[83px] h-[24px] px-2" src={maker} />
          </div>
        </div>
      </div>
      <div className="sm:flex hidden flex-col relative items-center ml-[20%]">
        <img src={hero} alt="Hero image" className=" w-[70%] h-[70%]" />
      </div>
    </section>
  )
}

export default Hero
