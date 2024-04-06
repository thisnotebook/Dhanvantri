import React from "react";


interface CardData {
  [key: string]: any;
}
export const CardDoc = ({ data }: { data: CardData }) => {
  return (
    <div className="max-w-[380px] max-h-[500px] bg-gray-100  rounded-md p-2 overflow-scroll  ">
      <div className="m-2 border-b-2 border-solid border-gray-300 ">
        <div className="flex">
          <div>
            <img
              src={data.images[0]}
              alt="Doctor Image"
              className="w-[125px] h-[125px] overflow-hidden rounded-full object-cover hover:border-[#183E9F] hover:scale-105 duration-300
                        border-4 border-solid border-[#64EBB6] m-2   "
            />
          </div>
          <div className="pt-2">
            <div className="w-[200px]  h-[50px] px-2 ">
              <p className="text-sm font-thin px-2 text-gray-700 "> {data.employee_id}</p>
              <h1 className="text-lg font-bold px-2 border-b-2 border-solid border-gray-300 hover:text-[#183E9F] duration-300">
              Dr {data.name.split(' ')[1]}
              </h1>
            </div>
            <div className="w-[200px] h-[70px]  px-2 pt-1">
              <div className="  h-[30px] flex overflow-hidden  ">
                <p className="text-sm font-thin p-1 px-2 text-gray-700"> {data.tags[0]}</p>
              </div>
              <div className="flex items-center">
              <img src="/location2.png" className="h-[13px]" />
              <h2 className="pr-2 pl-1 text-sm text-gray-700 ">  {data.location}</h2>
              <h1 className="h-[30px] text-sm font-thin  px-2 text-[#183E9F] flex items-center">
                <button>profile</button>
              </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 ">
        <div className="mx-2 ">
          <h1 className="p-2 pl-0 mx-2 font-semibold text-[#183E9F] text-md ">
            Specialization & Expertise
          </h1>
        </div>
        <div className="w-[80%] h-[110px] px-2 mx-2  text-gray-700 overflow-scroll  ">
          {data.expertise.map((expertise: string) => {
            return (
              <div key={expertise} className="flex items-center">
                 <img src="/check2.png" className="h-[13px]" />
                <h1 className="p-1 pl-2">{expertise}</h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-2 pt-4 flex justify-evenly">
        <button className="p-2 px-4 bg-blue-400 text-lg text-white rounded-lg hover:bg-[#183E9F] hover:scale-105 duration-300">
          Contact
        </button>
        <button className="p-2 px-4 bg-blue-400 text-lg text-white rounded-lg hover:bg-[#64EBB6] hover:scale-105 duration-300">
          {" "}
          Appointment
        </button>
      </div>
    </div>
  );
};
