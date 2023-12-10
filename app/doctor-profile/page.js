"use client"
import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/navbar";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CreateProfile() {

 const {data:session} = useSession()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneno: "",  
        startTime: "",
        endTime: "",
        specialization: "",
        experience: "",
        userId: session?.user?.id || "",
      });
      const [isLoading, setisLoading] = useState(false)
      const router = useRouter();

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = async (e) => {
        console.log("Form Data:", formData);
        e.preventDefault();
        
        try {
          setisLoading(true);
          const res = await fetch("api/doctors/adddoctor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Corrected this line
          });
      
          const rsponce = await res.json();
          console.log("rsponcesaaaaaaaaaaaaa", rsponce);
      
          if (res.ok) {
            toast.success('Profile Created successfully', 'success');
            router.push('/');
          } else {
            toast.error("Profile Created failed.", 'error');
          }
        } catch (error) {
          console.log("Error during Profile Created: ", error);
        } finally {
          setisLoading(false);
        }
      };
      

  return (
    <>
      <div className="">
        <Navbar />
        <Header
          heading="Create Profile"
          description="Leading the Way in Medical Excellence"
        />
      </div>

      <section className="text-gray-600 body-font relative  bg-white shadow-xl ">
        <div className="container w-[100%] px-5 py-20 mx-auto ">
          <div className="flex flex-col text-center w-full mb-12 ">
            <h1 className="sm:text-3xl text-3xl  font-bold title-font mb-4 text-gray-900">
              Create Profile
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3  mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlfor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlfor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlfor="phoneno" className="leading-7 text-sm text-gray-600">
                    Phone Number
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="phone"
                    id="phoneno"
                    name="phoneno"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlfor="startTime" className="leading-7 text-sm text-gray-600">
                    Open At{" "}
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="time"
                    id="startTime"
                    name="startTime"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlfor="endTime" className="leading-7 text-sm text-gray-600">
                    Close At{" "}
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="time"
                    id="endTime"
                    name="endTime"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlfor="specialization"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Specialization
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="text"
                    id="specialization"
                    name="specialization"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlfor="experience"
                    className="leading-7 text-sm text-gray-600"
                  >
                   Year's of  experience
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="number"
                    id="experience"
                    name="experience"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full mt-5">
                <button disabled={isLoading} onClick={handleSubmit} className="flex mx-auto text-white w-[70%]  justify-center bg-purple-500  border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  
                  {isLoading ? "Loading...." : "Create Profile"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
