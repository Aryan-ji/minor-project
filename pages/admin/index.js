import Link from 'next/link';
import React, { useState } from 'react';
import { FaHospitalAlt } from 'react-icons/fa';
import { MdLocalHospital } from 'react-icons/md';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { FaUserDoctor } from 'react-icons/fa6';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { TfiMenuAlt } from 'react-icons/tfi';

const Admin = () => {
    const [doctor, setDoctor] = useState('');
    const [dpassword, setDpassword] = useState('');
    const [demail, setDemail] = useState('');
    const [spec, setSpec] = useState('');
    const [docFees, setDocFees] = useState('');

    const handleAddDoctor = async () => {
        // Perform an API request to add a doctor to the database
        try {
            const response = await fetch('/api/addDoctor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ doctor, dpassword, demail, spec, docFees }),
            });

            if (response.ok) {
                // Doctor added successfully
                alert('Doctor added successfully!');
            } else {
                // Handle error
                alert('Failed to add doctor.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteDoctor = async () => {
        // Perform an API request to delete a doctor from the database
        try {
            const response = await fetch('/api/deleteDoctor', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ demail }),
            });

            if (response.ok) {
                // Doctor removed successfully
                alert('Doctor removed successfully!');
            } else {
                // Unable to delete
                alert('Unable to delete doctor.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <main className="container min-h-full my-8">
                <h3 className="text-center font-bold text-3xl py-4">WELCOME [Hospital]</h3>
                <section className="grid grid-cols-4 gap-4 my-8">
                    <div className="left">
                        <div className="relative overflow-x-auto rounded-md shadow-md">
                            <table className="border-2 w-full text-sm text-left text-gray-500 uppercase">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 bg-[#226dcf] font-medium text-white whitespace-nowrap"
                                        >
                                            Dashboard
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Doctor List
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Patient List
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Appointment Details
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Prescription List
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Add Doctor
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Delete Doctor
                                        </th>
                                    </tr>
                                    <tr className="bg-white border-b ">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                        >
                                            Queries
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="right flex flex-col flex-wrap col-span-3 ml-40 space-y-8">
                        <div className='flex flex-row gap-24'>
                            <div className="flex flex-col justify-center items-center">
                                <FaUserDoctor size={90} className="text-[#3832af]" />
                                <span className="font-semibold text-xl">Doctor List</span>
                                <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                    View Doctors
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <IoIosPeople size={90} className="text-[#3832af]" />
                                <span className="font-semibold text-xl">Patients List</span>
                                <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                    View Patients
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <AiOutlinePaperClip size={90} className="text-[#3832af]" />
                                <span className="font-semibold text-xl">Appointment Details</span>
                                <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                    View Appointments
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-24 pl-16">
                            <div className="flex flex-col justify-center items-center">
                                <TfiMenuAlt size={90} className="text-[#3832af]" />
                                <span className="font-semibold text-xl">Prescription Lists</span>
                                <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                    View Prescriptions
                                </Link>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <MdLocalHospital size={90} className="text-[#3832af]" />
                                <span className="font-semibold text-xl">Manage Doctors</span>
                                <span>
                                    <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                        Add Doctors
                                    </Link>
                                    &nbsp;|&nbsp;
                                    <Link href="/hospitallists" className="transition-all duration-500 hover:-translate-y-1 text-[#01c4fe]">
                                        Delete Doctors
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Admin;
