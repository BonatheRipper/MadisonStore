import React from "react";
import { useStateContext } from "../context/Statecontext";
import "../App.css";
import LongButtons from "./LongButtons";
const Contact = () => {
  const { themeBG } = useStateContext();

  return (
    <div
      className={`${themeBG} px-8 md:px-24 py-24 flex flex-col space-y-8 justify-center items-center w-full `}
    >
      <div className="border-b border-b-c-gold w-full flex justify-center">
        <h3 className="font-fair text-3xl mb-4">Contact Us</h3>
      </div>
      <div className="text-lg   text-justify tracking-widest">
        Do you want to make an enquiry? We will be delighted to hear it. Drop us
        a line below, we'd love to talk to you.
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between md:flex-1 ">
        <div className="flex flex-wrap justify-between h-full gap-6 mt-8 md:mt-0">
          <div className="flex flex-col space-y-4 w-72">
            <div
              className={`text-2xl w-8 h-8 text-gold flex justify-center items-center px-4 py-4`}
            >
              <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <h5 className=" uppercase tracking-widest font-medium ">
              our office address
            </h5>
            <p className="font-body text-base ">
              No.2 Shelter Afrique, Uyo,AkwaIbom State
            </p>
          </div>
          <div className="flex flex-col space-y-4 w-72">
            <div
              className={`text-2xl w-8 h-8 text-gold flex justify-center items-center px-4 py-4`}
            >
              <i class="fa fa-comments" aria-hidden="true"></i>
            </div>
            <h5 className="uppercase tracking-widest font-medium text-gold">
              Let us talk
            </h5>
            <p className="text-base ">+234-000-000-000</p>
          </div>
          <div className="flex flex-col space-y-4 w-72">
            <div
              className={`text-2xl w-8 h-8 text-gold flex justify-center items-center px-4 py-4`}
            >
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <h5 className="uppercase tracking-widest font-medium ">Mail us</h5>
            <p className="text-base ">contact@example.com</p>
          </div>
          <div className="flex flex-col space-y-4 w-72">
            <div
              className={`text-2xl w-8 h-8 text-gold flex justify-center items-center px-4 py-4`}
            >
              <i class="fa fa-globe" aria-hidden="true"></i>
            </div>
            <h5 className="uppercase tracking-widest font-medium ">
              Our website
            </h5>
            <p className="text-base ">www.example.com</p>
          </div>
        </div>
        <form className="flex flex-col space-y-12 w-full ">
          <div className="flex flex-col py-6">
            <label className="relative focus-within:text-c-gold block">
              <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your email here"
                className={` ${themeBG} py-3 px-4 w-full bg-c-green tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-c-gold text-gold placeholder:text-c-gold  appearance-none transition duration-300 focus:outline-none focus:border-c-gold focus:ring-c-gold focus:ring-1 `}
              />
            </label>
            <div className="flex flex-col py-6">
              <label className="relative focus-within:text-c-gold block">
                <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  name="pName"
                  placeholder="Your name goes here"
                  className={` ${themeBG} py-3 px-4 w-full bg-c-green tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-c-gold text-gold placeholder:text-c-gold  appearance-none transition duration-300 focus:outline-none focus:border-c-gold focus:ring-c-gold focus:ring-1 `}
                />
              </label>
            </div>
            <div className="flex flex-col py">
              <label className="relative focus-within:text-c-gold block">
                <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                  <i class="fa fa-commenting-o" aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  placeholder="Let's hear from you"
                  className={` ${themeBG} py-3 px-4 w-full bg-c-green tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-c-gold text-gold placeholder:text-c-gold  appearance-none transition duration-300 focus:outline-none focus:border-c-gold focus:ring-c-gold focus:ring-1 `}
                />
              </label>
            </div>
            <div className="flex flex-col py-6 items-center">
              <LongButtons
                to="/"
                text="send  message"
                css={`text-c-gold ${themeBG} border border-c-gold hover:text-black`}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
