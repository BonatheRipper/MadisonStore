import React from "react";
import { useState } from "react";
import AdminSharedHeader from "../Components/AdminSharedHeader";
import InputCms from "../Components/InputCms";

const AboutCms = () => {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("");
  const [button, setButton] = useState("");

  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0  flex flex-col w-full  h-screen">
        <AdminSharedHeader />
        <div className="flex p-2 md:p-6 flex-col my-20 w-full text-c-green">
          <p className="text-xl font-bold font-fair "> About Page</p>
          <form className="my-4 w-full border">
            <InputCms
              header="Title"
              value={title}
              click={(e) => setTitle(e.target.value)}
            />

            <InputCms
              header="Header"
              value={header}
              click={(e) => setHeader(e.target.value)}
            />
            <div className="relative my-2 flex flex-col border py-2 px-2 ">
              <label htmlFor="body" className=" py-2 text-sm">
                Body
              </label>
              <textarea id="body" className="h-60"></textarea>
            </div>
            <InputCms
              header="Button"
              value={button}
              click={(e) => setButton(e.target.value)}
            />
            <button className="px-4 mt-4 py-2 border w-full bg-black text-c-gold">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutCms;
