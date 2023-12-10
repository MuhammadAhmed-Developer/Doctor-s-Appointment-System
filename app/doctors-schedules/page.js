'use client'
import React from 'react'
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/navbar';
import { useRouter } from 'next/navigation';

export default function DoctorsSchedule() {

    const router = useRouter()
    const tableData = [
        { name: 'John Doe', Specialization: "orthopedic", openAt: "11:00 AM", closeAt: "05:00 PM" },
        { name: 'Jane Smith',Specialization: "Gynaecologist",  openAt: "10:00 AM", closeAt: "06:00 PM" },
        { name: 'Bob Johnson',Specialization: "Urologist",  openAt: "09:00 AM", closeAt: "07:00 PM" },
        // Add more rows as needed
    ];


    // Example function to handle button click
function handleButtonClick(id) {
      // console.log(id)
      router.push(`/`)
}

    return (
        <> 
        <div className=""> 
        <Navbar/>
        <Header  heading="Doctor's Schedule"   /></div>
       
        <div className="overflow-x-auto flex justify-center my-10">
           
            <table className="min-w-[80%]   ">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Specialization</th>
                        <th className="px-4 py-2">Open At</th>
                        <th className="px-4 py-2">Close At</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr className='hover:bg-slate-200' key={row.id}>
                            <td className="border px-4  py-2"><div className=" flex justify-center">{row.name}</div></td>
                            <td className="border px-4 py-2"><div className=" flex justify-center">{row.Specialization}</div></td>
                            <td className="border px-4 py-2  "><div className=" flex justify-center">{row.openAt}</div></td>
                            <td className="border px-4 py-2  "><div className="flex justify-center">{row.closeAt}</div> </td>
                            <td className="border px-4 py-2 flex justify-center ">
                                <button className="bg-purple-400 hover:bg-purple-700  text-white font-bold  px-4 rounded-xl" onClick={() => handleButtonClick(row.id)}>
                                    Fixed Appointment +
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

