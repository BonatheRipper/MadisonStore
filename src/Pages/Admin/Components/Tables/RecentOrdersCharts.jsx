import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../../context/Statecontext";
import LoadinElementAdmin from "../LoadinElementAdmin";
const RecentOrdersCharts = ({ Orders }) => {
  const { themeBG } = useStateContext();
  const [currentTable, setCurrentTable] = useState(1);
  const [ordersPerTable, setOrdersPerTable] = useState(8);

  const indexOfLastTable = currentTable * ordersPerTable;
  const indexOfFirstTable = indexOfLastTable - ordersPerTable;
  const currentOrders = () => {
    return Orders.slice(indexOfFirstTable, indexOfLastTable);
  };
  useEffect(() => {}, [Orders]);
  const [toggleTopProduct, SettoggleTopProduct] = useState(false);

  const SortRecentOrders = (num) => {
    if (!num > Orders.length || !num < Orders.length) {
      setOrdersPerTable(Number(num));
    }
    return SettoggleTopProduct(!toggleTopProduct);
  };

  function tableNumber() {
    let arr = [];
    for (let i = 1; i <= Math.ceil(Orders.length / ordersPerTable); i++) {
      arr.push(i);
    }
    return arr;
  }
  function paginateTable(pageNumber) {
    setCurrentTable(pageNumber);
  }
  const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
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
    <div
      className={`${themeBG} overflow-auto relative self-stretch w-screen h-auto  md:w-9/12 md:mr-4 m-0 rounded-md shadow-lg  border  p-1 `}
    >
      {
        <>
          {!Orders.length ? (
            <LoadinElementAdmin />
          ) : (
            <>
              <div className="btns flex justify-between p-1 my-4 text-gray-300 hover:text-white font-fair font-bold text-xl  px-4">
                <p>Recent orders</p>
                <div className="flex flex-col items-end justify-end ">
                  <button
                    onClick={() => SettoggleTopProduct(!toggleTopProduct)}
                    type="button"
                    className="hover:text-white hover:bg-black hover:p-1"
                  >
                    <TbGridDots />
                  </button>
                  <div
                    className={`p-2 mr-3 shadow-xl  rounded-md text-gray-600 justify-between bg-white flex flex-col items-start ${
                      toggleTopProduct ? "relative" : "scale-y-0 h-0"
                    }   `}
                  >
                    <button
                      onClick={() => SortRecentOrders(10)}
                      className="p-1 hover:text-c-gold"
                    >
                      10
                    </button>
                    <button
                      onClick={() => SortRecentOrders(50)}
                      className="p-1 hover:hover:text-c-gold"
                    >
                      50
                    </button>
                    <button
                      onClick={() => SortRecentOrders(100)}
                      className="p-1  hover:hover:text-c-gold"
                    >
                      100
                    </button>
                  </div>
                </div>
              </div>
              <div className={`w-screen md:w-full  overflow`}>
                <table className="w-full flex flex-col flex-1 ">
                  <>
                    <tr className="flex overflow-auto w-screen md:w-full px-2 justify-between mb-4 items-center text-gray-300 hover:text-white text-sm font-bold">
                      <th className="">OrderId</th>
                      <th>Status</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Total</th>
                    </tr>
                  </>
                  <>
                    {currentOrders().map((item) => {
                      return (
                        <>
                          {" "}
                          <tr
                            key={item.orderNo}
                            className="flex border px-2 border-c-gold justify-between w-screen md:w-full items-center   text-c-gold "
                          >
                            <td className=" hover:underline hover:text-gray-400 border-c-gold md:border-none w-24 text-sm px-2 md:text-base md:px-0">
                              {
                                <NavLink to={`/order/orderhistory/${item._id}`}>
                                  {item.orderNo}
                                </NavLink>
                              }
                            </td>
                            <td className="border-r border-c-gold md:border-none w-24 flex items-center justify-center py-2 text-c-green text-sm  md:text-base md:px-0 ">
                              {!item.isPaid ? (
                                <span className="bg-[#716761]  px-3  rounded-lg py-1">
                                  <small className=""> Unpaid</small>
                                  <span className="mx-1">
                                    <i
                                      class="fa fa-times"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              ) : (
                                <span className="bg-c-gold  px-3  rounded-lg py-1">
                                  <small> paid</small>
                                  <span className="mx-1">
                                    <i
                                      class="fa fa-check"
                                      aria-hidden="true"
                                    ></i>
                                  </span>
                                </span>
                              )}
                            </td>
                            <td className="border-r border-c-gold md:border-none  w-40 flex py-2 justify-start text-sm px-2 md:text-base md:px-0 ">
                              <small>
                                <span className="p-1 mx-1 border border-c-gold rounded-full">
                                  {item.ShippingDetails.Fname.substring(0, 2)}
                                </span>
                                {item.ShippingDetails.Fname}
                              </small>
                            </td>
                            <td className="border-r py-2 border-c-gold md:border-none w-20 flex justify-center text-sm px-2 md:text-base md:px-0">
                              {formatDate(new Date(item.createdAt))}
                            </td>
                            <td className=" border-c-gold md:border-none w-20 flex justify-center text-sm px-2 md:text-base md:px-0">
                              {formatToCurrency(item.totalPrice)}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                </table>
                <div className="Paginate  flex flex-row px-4 py-4 bg-c-gold mt-10 md:mt-0 text-c-green md:absolute bottom-0  w-full left-0">
                  {tableNumber().map((number) => {
                    return (
                      <span
                        onClick={() => paginateTable(number)}
                        key={number}
                        className={` flex mx-2 items-center justify-center ${
                          number === currentTable
                            ? `${themeBG} bg-c-gold  text-c-gold`
                            : " border border-c-green "
                        } rounded-full w-6 h-6`}
                      >
                        <span>{number}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </>
      }
    </div>
  );
};

export default RecentOrdersCharts;
