"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/Navbar";
import Link from "next/link";
import { CardDoc } from "../../../components/CardDoc";
import Dropdown from "../../../components/utils/dropdown";

import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Footer from "../../../components/Footer";

interface MyResponse {
  success: boolean;
  result: any;
}

const Location = ["Delhi", "Mumbai", "Chennai", "Bangalore", "Kolkata","Pune"];
export default function Doctor({ searchParams }) {
  const [docInfo, setDocInfo] = useState([]);
  const [docInfoAll, setDocInfoAll] = useState([]);
  const [docInfoLoc, setDocInfoLoc] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState("By-Location");

  const totalData: number = 45;
  const dataPerPage: number = 8;
  const totalPages: number = Math.ceil(totalData / dataPerPage);

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  let offset: number = (currentPage - 1) * dataPerPage;
  let offset2: number = currentPage - 1;

  const showDocByLocation = async () => {
    try {
      const abc = item === "By-Location" ? "" : item;
      console.log("abc", abc);
      const responseAll = await fetch(
        `http://localhost:4000/api/get/location/${abc}`,
        {
          method: "GET",
          cache: "no-cache",
        }
      );
      const resultsAll: MyResponse = await responseAll.json();
      console.log(resultsAll);
      if (resultsAll.success) {
        setDocInfoLoc(resultsAll.result);
        // console.log(result.result);
      } else {
        alert("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const showDoctor = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/${offset2}/${dataPerPage}`,
        {
          method: "GET",
          cache: "no-cache",
        }
      );

      const results: MyResponse = await response.json();
      //console.log(result.success, searchParams.page, searchParams);

      if (results.success) {
        setDocInfo(results.result);
        // console.log(result.result);
      } else {
        alert("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  let pageNumbers: any[] = [];
  for (let i = currentPage - 3; i <= currentPage + 3; i++) {
    if (i < 1) continue;
    if (i > totalPages) break;

    pageNumbers.push(i);
  }

  useEffect(() => {
    showDoctor();
  }, [currentPage]);

  useEffect(() => {
    showDocByLocation();
  }, [item]);
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-xl p-4 text-gray-700 font-bold">
          Find a Doctor...
        </h1>

        <div className="flex justify-end items-center gap-[20px] px-8 text-gray-700">
          <h2> Sort by</h2>
          {/* <By-Location location={Location} /> */}
          <div className="relative flex flex-col items-center w-[300px] rounded-lg">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-[#1B9CE4] p-2 py-1 pl-6 w-full flex items-center justify-between font-bold text-md rounded-xl text-white  tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
              {item}
              {!isOpen ? (
                <AiOutlineCaretDown className="h-8" />
              ) : (
                <AiOutlineCaretUp className="h-8" />
              )}

              {isOpen && (
                <div className="bg-[#1B9CE4] absolute top-14 right-[-1px] flex flex-col  items-start rounded-xl p-2 w-full text-white">
                  {Location.map((item, i) => (
                    <div
                      onClick={() => setItem(item)}
                      key={i}
                      className="pl-4 flex w-full justify-between hover:bg-blue-300 text-md  cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white p-2 border-l-4"
                    >
                      <h3> {item}</h3>
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>

          <button className="text-[#1B9CE4] text-sm" onClick={()=>setItem("By-Location")}>Reset</button>
        </div>
        {item != "By-Location" && (
          <div className="grid grid-cols-2 md:grid-cols-3  gap-4  p-2 lg:pl-8 pl-3 my-4">
            {docInfoLoc.map((data) => {
              return <CardDoc key={data.employee_id} data={data} />;
            })}
          </div>
        )}
       {item == "By-Location" &&  <div className="grid grid-cols-2 md:grid-cols-3  gap-4  p-2 lg:pl-8 pl-3 my-4">
          {docInfo.map((data) => {
            return <CardDoc key={data.employee_id} data={data} />;
          })}
        </div>}
      </div>
      {item == "By-Location" && docInfo[0] && (
        <div className="flex gap-[20px] justify-center my-4">
          <div className="text-lg hover:text-[#1B9CE4] ">
            {currentPage - 1 >= 1 && (
              <>
                <Link href={`?page=${currentPage - 1}`}>{"<<"}</Link>
              </>
            )}
          </div>
          <div className="">
            {pageNumbers.map((page) => (
              <span key={page} className="text-lg p-[5px] hover:text-[#1B9CE4]">
                <Link
                  className={
                    page === currentPage ? "text-[#1B9CE4]  font-extrabold" : ""
                  }
                  href={`?page=${page}`}
                >
                  {page}{" "}
                </Link>
                {/* <Link href={`speciality?page=${page}`}>{page} </Link> */}
              </span>
            ))}
          </div>

          <div className="text-lg hover:text-[#1B9CE4]">
            {currentPage + 1 <= totalPages && (
              <>
                <Link href={`?page=${currentPage + 1}`}>{">>"}</Link>
              </>
            )}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
