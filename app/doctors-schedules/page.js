"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/navbar";
import { useRouter } from "next/navigation";

export default function DoctorsSchedule() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(tableData);
  const router = useRouter();

  const getDoctorsProfiles = async () => {
    try {
      setIsLoading(true);
      const responce = await fetch(
        "api/doctors/getdoctor",
        { cache: "no-store" },
        {
          method: "GET",
        }
      );
      const data = await responce.json();
      console.log("data", data);
      if (data) {
        setTableData(data.allDoctors);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getDoctorsProfiles();
  }, []);

  // Example function to handle button click
  function handleButtonClick(id, userId) {
    router.push(`/appointments-form/${id}/${userId}`);
  }

  return (
    <>
      <div className="">
        <Navbar />
        <Header heading="Doctor's Schedule" />
      </div>

      <div className="overflow-x-auto flex justify-center my-10">
        <table className="min-w-[80%]   ">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Specialization</th>
              <th className="px-4 py-2">Experience</th>
              <th className="px-4 py-2">Phone No</th>
              <th className="px-4 py-2">Open At</th>
              <th className="px-4 py-2">Close At</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          {isLoading ? (
            <div className="text-center ">Loading....</div>
          ) : (
            <tbody>
              {tableData?.map((item) => (
                <tr className="hover:bg-slate-200" key={item.id}>
                  <td className="border px-4  py-2">
                    <div className=" flex justify-center">{item.name}</div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className=" flex justify-center">
                      {item.specialization}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className=" flex justify-center">
                      {item.experience}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className=" flex justify-center">{item.phoneno}</div>
                  </td>
                  <td className="border px-4 py-2  ">
                    <div className=" flex justify-center">{item.startTime}</div>
                  </td>
                  <td className="border px-4 py-2  ">
                    <div className="flex justify-center">{item.endTime}</div>{" "}
                  </td>
                  <td className="border px-4 py-2 flex justify-center ">
                    <button
                      className="bg-purple-400 hover:bg-purple-700  text-white font-bold  px-4 rounded-xl"
                      onClick={() => handleButtonClick(item.id, item.userId)}
                    >
                      Fixed Appointment +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
