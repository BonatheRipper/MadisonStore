import React, { useState, useEffect } from "react";

import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { CgArrowLongLeft } from "react-icons/cg";
import AdminSharedHeader from "./Components/AdminSharedHeader";

const AdminSupport = () => {
  const screenSize = 1000;
  const navheight = 220;
  const [chatBox, SetchatBox] = useState(false);
  const [chatMenu, SetchatMenu] = useState(false);

  const HandleChatState = () => {
    console.log(chatMenu);
    SetchatMenu(!chatMenu);
  };

  const toggleChatPane = () => {
    SetchatMenu(!chatMenu);
  };

  return (
    <div className="">
      <AdminSharedHeader />
      {/* <h1 className='text-3xl p-4'>Support</h1> */}
      <div
        className={`flex justify-between h-full relative bg-[#F1FFFD]   text-c-gold`}
      >
        <div
          className={`${
            chatMenu ? "-left-full w-0" : "w-full left-0 "
          }  z-20   h-screen   lg:w-3/12  fixed  bg-black pt-12`}
        >
          <div className="search flex flex-row items-center py-3">
            <div className="userImg px-1">
              <img
                src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                alt="Profilepic"
                className="w-11 h-11 rounded-full"
              />
            </div>
            <div className="userImg px-2 relative flex items-center  ">
              <BsSearch className="absolute ml-2  " />
              <input
                type="search"
                placeholder="search messages"
                className="border border-c-gold w-10/12 active:border-none px-20 pl-8 py-1 bg-black rounded-md"
              />
            </div>
          </div>
          {/* //THIS IS WHERE I SHOULD MAP USERS */}
          {/* //THIS IS WHERE I SHOULD MAP USERS */}
          {/* //THIS IS WHERE I SHOULD MAP USERS */}
          <div
            id="RecentChats"
            onClick={() => HandleChatState()}
            className={` flex flex-row items-center py-1 border-b border-c-gold`}
          >
            <div className="userImg p-1 items-center flex flex-row w-full relative">
              <div className="flex relative  px-1">
                <img
                  src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                  alt="Profilepic"
                  className="w-11 h-11 rounded-full "
                />
                <RiCheckboxBlankCircleFill className="w-2 h-2 absolute mt-1 text-green-500 " />
              </div>
              <div className=" flex flex-row px-2 items-center justify-between  w-full">
                <div className="flex flex-col w-full text-left  ">
                  <small className="bold text-gray-500">Bona Andrews</small>
                  <small className="">
                    Hello Please i need my files to be set up
                  </small>
                </div>
                <div className="lastSeeen text-right w-8/12">
                  <small style={{ fontSize: "10px" }} className="px-5 w-full">
                    2 minutes ago
                  </small>
                </div>
              </div>
            </div>
          </div>
          {/* //THIS IS WHERE I SHOULD MAP USERS ENDS*/}
          {/* //THIS IS WHERE I SHOULD MAP USERS ENDS*/}
          {/* //THIS IS WHERE I SHOULD MAP USERS ENDS*/}
        </div>
        <div
          id="CurrentUserChat"
          className={`${
            chatMenu ? "inline" : " md:w-9/12 "
          } right-0    w-full h-full text-c-green absolute pt-12`}
        >
          {/* TOP USER DETAILS NEEDS CHANGING TOO */}
          {/* TOP USER DETAILS NEEDS CHANGING TOO */}
          {/* TOP USER DETAILS NEEDS CHANGING TOO */}

          <div className=" border-b shadow-lg flex flex-row items-center justify-between py-3  sticky top-0 w-full   text-c-green z-10">
            <div className="userImg p-1 items-center flex flex-row w-full relative ">
              <div
                className={`toggleChatPane px-2  mt-4 ${
                  chatMenu ? "inline" : "false"
                }`}
              >
                <button
                  onClick={() => toggleChatPane()}
                  type="button"
                  className="h-5 w-18"
                >
                  <CgArrowLongLeft className="h-5 w-18" />
                </button>
              </div>
              <div className="flex relative  p-1">
                <img
                  src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                  alt="Profilepic"
                  className="w-11 h-11 p-1 rounded-full "
                />
                <RiCheckboxBlankCircleFill className="w-2 h-2 absolute mt-1 " />
              </div>

              <div className="px-1 flex flex-col mx-1 items-start ">
                <small className="bold">Bona Andrews</small>
                <small>
                  Last seen <span>2 days ago</span>
                </small>
              </div>
            </div>
            <div className="userImg p-1 relative ">
              <BsThreeDotsVertical className="p-1 w-7 h-7" />
            </div>
          </div>

          {/* TOP USER DETAILS NEEDS CHANGING TOO */}
          {/* TOP USER DETAILS NEEDS CHANGING TOO */}
          {/* TOP USER DETAILS NEEDS CHANGING TOO */}

          {/*  CHATS MESSAGES BOX STTARTS */}

          <div className=" py-6 h-full flex flex-col items-center  w-full  grow top-24 z-0 text-center">
            <div className="  w-full h-5  text-center flex ">
              <small className=" items-center w-full bold ">OCTOBER 9</small>
            </div>

            <div className="  w-full h-auto">
              <div className="chatDdate  p-3 flex  relative bg-green h-auto justify-start items-left">
                <div className="img p-1 flex justify-end items-end ">
                  <img
                    src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                    alt="Profilepic"
                    className="w-11 h-11 p-1 rounded-full "
                  />
                </div>
                <div
                  style={{ fontSize: ".875rem" }}
                  className="messages  flex h-auto break-all flex-col p-2 items-left justify-start text-left w-11/12"
                >
                  <div className="p-2">
                    <span className="bg-[#e0eeff] p-1 px-3 rounded-lg">
                      Hello Admin
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="bg-[#e0eeff] p-1 px-3  rounded-lg">
                      What do you see in me
                    </span>
                  </div>
                  <div className="h-full p-2">
                    <span className="bg-[#e0eeff] p-1 px-3  rounded-lg">
                      I Believe i am
                      wDo2yr9GrbXtY1ridrWAifogAef5vKo5Y8OSX0p6nksvu8njs78YlR4ZD1T
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="  w-full h-auto">
              <div className="chatDdate  p-3 flex  relative bg-green h-auto justify-end items-right">
                <div
                  style={{ fontSize: ".875rem" }}
                  className="messages  flex h-auto break-all flex-col p-2 items-left justify-start text-right w-11/12"
                >
                  <div className="p-2">
                    <span className="bg-[#def7fd] p-1 px-3 rounded-lg">
                      Hello Admin
                    </span>
                  </div>
                  <div className="p-2">
                    <span className="bg-[#def7fd] p-1 px-3  rounded-lg">
                      What do you see in me
                    </span>
                  </div>
                  <div className="h-full p-2">
                    <span className="bg-[#def7fd] p-1 px-3  rounded-lg">
                      I Believe i am
                      wDo2yr9GrbXtY1ridrWAifogAef5vKo5Y8OSX0p6nksvu8njs78YlR4ZD1T
                    </span>
                  </div>
                </div>
                <div className="img p-1  flex justify-end items-end">
                  <img
                    src="https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                    alt="Profilepic"
                    className="w-11 h-11 p-1 rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className='chatsInside  flex flex-col w-full items-center'>
             <div className='chatDdate   p-3 '>
                7 October
             </div>
             <div className='chatDdate  p-3 flex flex-row bg-green'>
                 <div className='img p-1'>
                 <img src={userProfile1} alt="Profilepic" className='w-11 h-11 p-1 rounded-full '/>

                 </div>
                 <div className='messages flex flex-col p-1'>
                    <div>Hello</div>
                    <div>What do you see in me</div>
                    <div>I  Believe i am wDo2yr9GrbXtY1ridrWAifogAef5vKo5Y8OSX0p6nksvu8njs78YlR4ZD1T</div>
                 </div>
             </div>

 <div className='chatDdate  p-3 flex flex-row bg-green'>
        
                 <div className='messages flex flex-col p-1'>
                    <div>Hello</div>
                    <div>What do you see in me</div>
                    <div>I  Believe i am wDo2yr9GrbXtY1ridrWAifogAef5vKo5Y8OSX0p6nksvu8njs78YlR4ZD1T</div>
                 </div>
                 <div className='img p-1'>
                 <img src={userProfile1} alt="Profilepic" className='w-11 h-11 p-1 rounded-full '/>

                 </div>
                
             </div>

         </div> */}
          {/*  CHATS MESSAGES BOX STTARTS */}

          {/*  CHAT INPUT BOX STTARTS */}

          <div className=" flex flex-row items-center   px-2  h-20 fixed w-full  z-10 -bottom-3">
            <div className="messag  px-4 w-full relative flex items-center ">
              <input
                type="text"
                placeholder="Hello my name is Max"
                className="rounded-lg  border border-c-gold w-full px-15 py-2 m-0"
              />
              <button className="rounded-lg text-c-gold  border border-c-gold fixed px-4  py-2 bg-black right-0">
                Send
              </button>
            </div>
          </div>

          {/*  CHAT INPUT BOX STTARTS ENDS*/}
          {/*  CHAT INPUT BOX STTARTS ENDS*/}
          {/*  CHAT INPUT BOX STTARTS ENDS*/}
        </div>
      </div>
    </div>
  );
};

export default AdminSupport;
