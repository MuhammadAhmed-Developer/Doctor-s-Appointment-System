"use client";
import { useState } from "react";
import Link from "next/link";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const { data: session, status } = useSession();
  console.log("session", session, status);

  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative mx-10">
        <div className="w-[20%] flex items-center justify-end md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <Link href="/">
              <FaUserDoctor className="text-purple-500 text-4xl" />
            </Link>
          </div>
        </div>
        <div className="w-[60%] flex justify-center items-center">
          <nav className="max-md:hidden flex w-[100%] mt-2  justify-center items-center">
            <ul className="flex items-center justify-center w-[100%] lg:space-x-6 space-x-7 opacity-70 text-[15px]">
              <li>
                <Link
                  href="/"
                  className="py-3 text-purple-800 w-full hover:text-purple-500 hover:underline"
                >
                  <span className="text-md">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="py-3 text-purple-800 w-full hover:text-purple-500 hover:underline"
                >
                  <span className="text-md">About Us</span>
                </Link>
              </li>
              <li>
                {session?.user?.role == "doctor" && (
                  <Link
                    href="/doctors-schedules"
                    className="py-3  text-purple-800 w-full hover:text-purple-500 hover:underline"
                  >
                    <span className="text-md text-purple-800 font-bold">
                      Doctor's Schedule
                    </span>
                  </Link>
                )}
              </li>
              <li>
                <Link
                  href="/contact"
                  className="py-3  text-purple-800 w-full hover:text-purple-500 hover:underline"
                >
                  <span className="text-md">Contact Us</span>
                </Link>
              </li>
              {status == "authenticated" && (
                <li>
                  <Link
                    href="your-appointment"
                    className="py-3  text-purple-800 w-full hover:text-purple-500 hover:underline"
                  >
                    <span className="text-md">Your Appointment</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4 w-[20%]">
          <div className="relative cursor-pointer">
            {status !== "authenticated" ? (
              <Link href={"/login"}>
                <div className="flex items-center bg-gray-100 px-3  my-4 py-3 rounded-full">
                  <FaRegCircleUser size={20} className="text-purple-500" />
                  <span className="text-purple-500 ml-1">Signin / Singup</span>
                </div>
              </Link>
            ) : (
              <Link href={"/login"}>
                <div
                  onClick={() => signOut()}
                  className="flex items-center bg-gray-100 px-3  my-4 py-3 rounded-full"
                >
                  <RiLogoutBoxLine size={20} className="text-purple-500" />
                  <span className="text-purple-500 ml-1">Logout</span>
                </div>
              </Link>
            )}
          </div>
          {session?.user?.role == "doctor" && (
            <Link href={"/doctor-profile"}>
              <div className="flex items-center bg-gray-100 px-3  my-4 py-3 rounded-full">
                <span className="text-purple-500 ml-1">Create Profile</span>
              </div>
            </Link>
          )}
          <span
            onClick={() => {
              setShowNav(!showNav);
            }}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <Link href="/shop" className="py-3 inline-block w-full"></Link>
          </li>
          <li>
            <Link href="/filters" className="py-3 inline-block w-full">
              Filters
            </Link>
          </li>
          <li>
            <Link href="/myproducts" className="py-3 inline-block w-full">
              My Products
            </Link>
          </li>
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <BiSearch size={20} className="opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
