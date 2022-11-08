import React from "react";
import { useStateContext } from "../../context/Statecontext";
import { AiFillEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoadinElementAdmin from "./Components/LoadinElementAdmin";
import { useEffect } from "react";
import { FetchAllProductsAdmin } from "./Services/FetchAllProducts";
import AdminFooter from "./Components/AdminFooter";
import {
  paginateNumbersLength,
  paginatePager,
  paginatePageToDisplay,
} from "../../Utils/Paginate";
import axios from "axios";
import { toast } from "react-toastify";
import AdminSharedHeader from "./Components/AdminSharedHeader";
import AdminPopUp from "./Components/AdminPopUp";
import ProductsPageBtn from "./Components/ProductsPageBtn";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import RadionInputAdmin from "./Components/RadionInputAdmin";

const AdminUsers = () => {
  const { user, themeBG, popup, setPopup } = useStateContext();
  const [Users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [username2, setUsername2] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [checked2, setChecked2] = useState(false);
  const [currentTable, setCurrentTable] = useState(1);
  const [ordersPerTable, setOrdersPerTable] = useState(10);
  const [subscriberToDeleteID, setSubscriberToDeleteID] = useState("");
  const [userToEdit, setEditUser] = useState(false);
  const [userToAdd, setuserToAdd] = useState(false);
  const indexOfLastTable = currentTable * ordersPerTable;
  const indexOfFirstTable = indexOfLastTable - ordersPerTable;
  useEffect(() => {
    (async function () {
      let usersFromServer = await axios.get("/api/users/admin/users");
      setUsers(usersFromServer.data);
    })();
  }, []);

  const getSubscriberToDeleteId = async (subId) => {
    setSubscriberToDeleteID(subId);
    setPopup(!popup);
  };
  const handleSubscriberDelete = async () => {
    try {
      const results = await axios.delete(
        `/api/subscription/${subscriberToDeleteID}`,
        {
          headers: { authorization: `Bearer ${user.token}` },
        }
      );
      if (results) {
        setUsers(results.data);
        setPopup(!popup);
        toast("Subscriber removed successfully");
      }
    } catch (e) {
      console.log(e);
      return toast.error(e.response.data.error);
    }
  };
  const handleUserUpdate = async () => {
    if (username2 && email2) {
      try {
        let UsersFromServer = await axios.put(`/api/users/admin/users`, {
          email2,
          password2,
          username2,
          checked2,
        });
        setUsers(UsersFromServer.data);
        toast("User Updated successfully");
        setEmail2("");
        setPassword2("");
        setUsername2("");
        setChecked2(false);
      } catch (e) {
        toast.error(e.response.data.message);
      }
    } else {
      return toast.error("Field cannot be empty");
    }
  };
  const handleUserAdd = async () => {
    if (username && email && password) {
      try {
        let UsersFromServer = await axios.post(`/api/users/admin/users`, {
          email,
          password,
          username,
          checked,
        });
        setUsers(UsersFromServer.data);
        toast("User added successfully");
        setEmail("");
        setPassword("");
        setUsername("");
        setChecked(false);
      } catch (e) {
        toast.error(e.response.data.message);
      }
    } else {
      return toast.error("Field cannot be empty");
    }
  };
  function handleEditUser(user) {
    console.log(user);
    setEditUser(true);
    setUsername2(user.username);
    setEmail2(user.email);
    setChecked2(user.isAdmin);
  }
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
  return (
    <>
      <div className="relative bg-[#F1FFFD] m-0 h-full flex flex-col px-2">
        <AdminSharedHeader />
        <p className="pt-24 px-8 text-2xl text-gray-800">Shop Users</p>

        <div className="flex  text-c-green  justify-between items-center p-4 mt-16 flex-col md:flex-row">
          <div
            onClick={() => setuserToAdd("")}
            className={`w-full shadow-sm hover:animate-pulse mb-2  rounded-lg border h-auto  font-bold text-xl p-2 md:mx-1 flex flex-col justify-center items-center`}
          >
            <span className="my-1 py-2 ">
              <BsFillPeopleFill />
            </span>
            <button>Add Users</button>
          </div>
        </div>
        {userToEdit !== false && (
          <div className="w-full flex justify-center">
            <div className="w-11/12 flex border my-4 flex-col justify-between items-center px-8 py-2 shadow">
              <div
                onClick={() => setEditUser(false)}
                className="w-full  hover:text-red-500 flex justify-end text-2xl text-gray-800  font-bold"
              >
                <MdCancel />
              </div>
              <p className="w-full text-left text-gray-800 py-2 font-bold">
                Edit User
              </p>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Username</p>
                <input
                  type="text"
                  value={username2}
                  onChange={(e) => setUsername2(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Email</p>
                <input
                  type="text"
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Password</p>
                <input
                  type="text"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="relative my-2 flex flex-row border py-2 px-2 justify-center items-center ">
                <p className="text-black">Make Admin</p>
                <div className="mx-6">
                  <RadionInputAdmin
                    header="True"
                    value={""}
                    checked={checked2}
                    click={(e) => setChecked2(!checked2)}
                  />
                </div>
                <div className="mx-6">
                  <RadionInputAdmin
                    header="False"
                    value={""}
                    checked={!checked2}
                    click={(e) => setChecked2(!checked2)}
                  />
                </div>
              </div>
              <button
                onClick={() => handleUserUpdate()}
                className={`py-1 rounded-lg my-4 px-4 hover:text-white hover:cursor-pointer ${themeBG}`}
              >
                Update User
              </button>
            </div>
          </div>
        )}
        {userToAdd !== false && (
          <div className="w-full flex justify-center">
            <div className="w-11/12 flex border my-4 flex-col justify-between items-center px-8 py-2 shadow">
              <div
                onClick={() => setuserToAdd(false)}
                className="w-full  hover:text-red-500 flex justify-end text-2xl text-gray-800  font-bold"
              >
                <MdCancel />
              </div>
              <p className="w-full text-left text-gray-800 py-2 font-bold md:w-6/12">
                Add User
              </p>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Username</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Email</p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="flex flex-col my-2 w-full md:w-6/12">
                <p>Password</p>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full shadow border border-gray-300 rounded-md py-1"
                />
              </div>
              <div className="relative my-2 flex flex-row border py-2 px-2 justify-center items-center ">
                <p className="text-black">Make Admin</p>
                <div className="mx-6">
                  <RadionInputAdmin
                    header="True"
                    value={""}
                    checked={checked}
                    click={(e) => setChecked(!checked)}
                  />
                </div>
                <div className="mx-6">
                  <RadionInputAdmin
                    header="False"
                    value={"liveKey"}
                    checked={!checked}
                    click={(e) => setChecked(!checked)}
                  />
                </div>
              </div>
              <button
                onClick={() => handleUserAdd()}
                className={`py-1 rounded-lg my-4 px-4 hover:text-white hover:cursor-pointer ${themeBG}`}
              >
                Add User
              </button>
            </div>
          </div>
        )}
        <div
          className={`${themeBG}  relative px-1 md:px-4  ${
            !Users.length ? "h-64" : "h-full "
          }     rounded-md shadow-lg  border  p-1  w-full overflow-hidden my-4`}
        >
          {
            <>
              {!Users.length ? (
                <LoadinElementAdmin />
              ) : (
                <>
                  <div className="btns w-full absolute overflow-hidden flex justify-between  px-2 mt-4 text-gray-300 hover:text-white font-fair font-bold text-xl"></div>
                  <div className={` w-full  mt-20 overflow-hidden md:w-full`}>
                    <table className="w-full flex flex-col flex-1 ">
                      <>
                        <tr className="flex w-full justify-between  mb-4 text-gray-300 hover:text-white text-sm font-bold">
                          <th className="">Email</th>

                          <th className=" md:inline px-4">Date</th>
                        </tr>
                      </>

                      <>
                        {paginatePageToDisplay(
                          Users,
                          indexOfFirstTable,
                          indexOfLastTable
                        )
                          .reverse()
                          .map((item, i) => {
                            return (
                              <>
                                <tr
                                  key={i}
                                  className="flex relative  w-full border px-2 border-c-gold justify-between z-10 md:w-full items-center   text-c-gold "
                                >
                                  <td className="h-8 font-bold w-full transition duration-1000 left-0 absolute bg-c-gold hover:opacity-100 opacity-0 hover:visible z-20 text-c-green px-4 border border-c-green flex justify-between items-center text-xl ">
                                    <button
                                      onClick={() => handleEditUser(item)}
                                      className="underline hover:animate-pulse "
                                    >
                                      <FaRegEdit />
                                    </button>
                                    <button
                                      onClick={() =>
                                        getSubscriberToDeleteId(item._id)
                                      }
                                      className="underline hover:animate-pulse hover:text-red-600 transition duration-500 "
                                    >
                                      <RiDeleteBin4Line />
                                    </button>
                                  </td>
                                  <td className="text-xs md:text-base hover:underline hover:text-gray-400 border-c-gold md:border-none w-24  px-2  md:px-0">
                                    {item.email}
                                  </td>

                                  <td className="  md:inline text-xs md:text-base border-r py-2 border-c-gold md:border-none w-20 flex justify-center px-2  md:px-0">
                                    {formatDate(new Date(item.createdAt))}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                      </>
                    </table>
                    <div className="Paginate  flex flex-row px-4 py-4 bg-c-gold  text-c-green   w-full ">
                      {paginateNumbersLength(Users, ordersPerTable).map(
                        (number, i) => {
                          return (
                            <span
                              onClick={() =>
                                paginatePager(setCurrentTable, number)
                              }
                              key={i}
                              className={` flex mx-2 items-center justify-center ${
                                number === currentTable
                                  ? `${themeBG} bg-c-gold  text-c-gold`
                                  : " border border-c-green "
                              } rounded-full w-6 h-6`}
                            >
                              <span>{number}</span>
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </>
              )}
            </>
          }
        </div>
        {popup && (
          <AdminPopUp
            text="Are you sure you want to delete this subscriber?"
            click={() => handleSubscriberDelete()}
          />
        )}
      </div>
      <AdminFooter />
    </>
  );
};

export default AdminUsers;
