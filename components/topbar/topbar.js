"use client";
import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { PiFacebookLogo } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";

import Link from "next/link";

export default function () {
 
  return (
    <div className="bg-purple-200 items-center justify-center">
      <div className="flex justify-around items-center lg:flex-nowrap md:flex-wrap flex-wrap">
        <div className="flex">
          <span className="text-purple-500 mr-3">Contact Info</span>

          <LuPhoneCall className="text-purple-500 mt-1 mr-2" />
          <Link href={"callto:0904023040"} className="text-purple-500">+04480-3928</Link>
        </div>
        <div>
          <div>
            <ul className="flex list-none gap-10">
              <Link href={"callto:030202200"}>
                <li className="flex">
                  <IoIosMail className="text-purple-500 text-[20px] mt-1 mr-2" />
                  <Link href={"mailto:muhammadahmedite@gmail.com"} className="text-purple-500">info@hospital.com</Link>
                </li>
              </Link>
              <Link href={"https://www.instagram.com/muhammad_ahmed0011/"}>
                <li>
                  <SlSocialInstagram className="text-purple-500 mt-1" />
                </li>
              </Link>
              <Link href={"https://www.facebook.com/MuhammadAhmedjee"}>
                <li>
                  <PiFacebookLogo className="text-purple-500 mt-[2px] text-[20px]" />
                </li>
              </Link>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
