import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { TbGridDots } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../../../context/Statecontext";
import LoadinElementAdmin from "../LoadinElementAdmin";
import {
  paginateNumbersLength,
  PaginateOrder,
  paginatePager,
  paginatePageToDisplay,
} from "../Utils/Paginate";
const RecentOrdersCharts = ({ Orders }) => {
  const { themeBG } = useStateContext();
  const [currentTable, setCurrentTable] = useState(1);
  const [ordersPerTable, setOrdersPerTable] = useState(8);
  const indexOfLastTable = currentTable * ordersPerTable;
  const indexOfFirstTable = indexOfLastTable - ordersPerTable;
  useEffect(() => {}, [Orders]);
  const [toggleTopProduct, SettoggleTopProduct] = useState(false);

  const SortRecentOrders = (num) => {
    if (!num > Orders.length || !num < Orders.length) {
      setOrdersPerTable(Number(num));
    }
    return SettoggleTopProduct(!toggleTopProduct);
  };

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
      className={`${themeBG}  relative self-stretch   ${
        !Orders.length ? "h-64 " : "h-auto "
      }  md:w-9/12 md:mr-4 m-0 rounded-md shadow-lg  border  p-1  w-screen overflow-auto `}
    >
      {
        <>
          {!Orders.length ? (
            <LoadinElementAdmin />
          ) : (
            <>
              <div className="btns w-screen  overflow-auto absolute md:w-full  flex justify-between p-1 mt-4 text-gray-300 hover:text-white font-fair font-bold text-xl  px-4">
                <p>Recent orders</p>

                <PaginateOrder
                  SetToggleSort={SettoggleTopProduct}
                  toggleSort={toggleTopProduct}
                  setItemsPerPage={setOrdersPerTable}
                />
              </div>
              <div
                className={` md:w-full  mt-20 w-screen overflow-auto md:w-full`}
              >
                <table className="w-full flex flex-col flex-1 ">
                  <>
                    <tr className="flex w-stretch overflow-clip md:w-full px-2 justify-between mb-4 items-center text-gray-300 hover:text-white text-sm font-bold">
                      <th className="">OrderId</th>
                      <th>Status</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Total</th>
                    </tr>
                  </>
                  <>
                    {paginatePageToDisplay(
                      Orders,
                      indexOfFirstTable,
                      indexOfLastTable
                    ).map((item) => {
                      return (
                        <>
                          {" "}
                          <tr
                            key={item.orderNo}
                            className="flex  w-stretch overflow-auto overflow-x-auto border px-2 border-c-gold justify-between  md:w-full items-center   text-c-gold "
                          >
                            <td className="text-xs md:text-base hover:underline hover:text-gray-400 border-c-gold md:border-none w-24  px-2  md:px-0">
                              {
                                <NavLink to={`/order/orderhistory/${item._id}`}>
                                  {item.orderNo}
                                </NavLink>
                              }
                            </td>
                            <td className="border-r border-c-gold md:border-none w-24 flex items-center justify-center py-1 md:py-2 text-c-green text-xs md:text-base md:px-0 ">
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
                            <td className="border-r border-c-gold md:border-none  w-40 flex py-2 justify-start  text-xs md:text-base px-2  md:px-0 ">
                              <small>
                                <span className="p-1 mx-1 border border-c-gold rounded-full">
                                  {item.ShippingDetails.Fname.substring(0, 2)}
                                </span>
                                {item.ShippingDetails.Fname}
                              </small>
                            </td>
                            <td className="text-xs md:text-base border-r py-2 border-c-gold md:border-none w-20 flex justify-center px-2  md:px-0">
                              {formatDate(new Date(item.createdAt))}
                            </td>
                            <td className=" border-c-gold md:border-none w-20 flex justify-center text-xs md:text-base px-2  md:px-0">
                              {formatToCurrency(item.totalPrice)}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </>
                </table>
                <div className="Paginate  flex flex-row px-4 py-4 bg-c-gold mt-10 md:mt-0 text-c-green md:absolute bottom-0  w-full ">
                  {paginateNumbersLength(Orders, ordersPerTable).map(
                    (number) => {
                      return (
                        <span
                          onClick={() => paginatePager(setCurrentTable, number)}
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
                    }
                  )}
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
