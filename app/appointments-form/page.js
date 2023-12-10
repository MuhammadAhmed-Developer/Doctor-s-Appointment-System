'use client'
import React, { useState } from 'react';
import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/navbar';

export default function Appointment() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        appointmentTime: '',
        duration: '',
        appointmentDate: '',
        phoneNo: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


 

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Log the form data to the console
        console.log('Form Data:', formData);
    
        // // Replace 'your_api_endpoint' with the actual API endpoint
        // const apiUrl = 'your_api_endpoint';
        // fetch(apiUrl, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle the API response as needed
        //         console.log('API Response:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    };
    

    return (
        <>
            <div className="">
                <Navbar/>
                <Header heading="Book our Appointments" description="Leading the Way in Medical Excellence" />
            </div>

            <section className="body-font relative appointment bg-white shadow-xl">
                <div className="container w-[70%] px-5 py-20 mx-auto shadow-2xl">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Appointment Info</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">Thank you for choosing our services! </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-white">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Appointment Time</label>
                                    <input type="time"
                                        id="appointmentTime"
                                        name="appointmentTime"
                                        value={formData.appointmentTime}
                                        onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Duration</label>
                                    <input type="time"
                                        id="duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Appointment Date </label>
                                    <input type="date"
                                        id="appointmentDate"
                                        name="appointmentDate"
                                        value={formData.appointmentDate}
                                        onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-white">Phone No </label>
                                    <input type="number"
                                    id="phoneNo"
                                    name="phoneNo"
                                    value={formData.phoneNo}
                                    onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-white">Description</label>
                                    <input type="text" 
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button
                                    type="submit"
                                    className="flex mx-auto text-white w-[70%] justify-center bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}