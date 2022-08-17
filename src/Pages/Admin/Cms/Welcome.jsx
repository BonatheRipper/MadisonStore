import React from "react";
import AdminSharedHeader from "../Components/AdminSharedHeader";

const Welcome = () => {
  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0  flex flex-col   h-full">
        <AdminSharedHeader />
        <div className="flex p-2 md:p-6 flex-col my-20 text-c-green">
          <p className="text-xl font-bold font-fair "> Home/Welcome</p>
        </div>
      </div>
    </>
  );
};

export default Welcome;
