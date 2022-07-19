import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollRotate } from "react-scroll-rotate";

const ThemeSettings = () => {
  const [goingUp, setGoingUp] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      setGoingUp(goingUp + 1);
    };
    console.log(goingUp);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <div
      onClick=""
      className="w-8 h8  fixed z-50 text-3xl text=green bottom-0 right-1"
    >
      <ScrollRotate>
        <i class="fa fa-cog w-full h-full" aria-hidden="true"></i>
      </ScrollRotate>
    </div>
  );
};

export default ThemeSettings;
