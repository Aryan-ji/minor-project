import React, { useState } from 'react';
import { BsFillRocketFill } from 'react-icons/bs';
import styles from '../styles/Home.module.css';
import PatientLogin from '@/components/PatientLogin';
import HospitalLogin from '@/components/HospitalLogin';
import AdminLogin from '@/components/AdminLogin';
export default function Home() {
  const [focus, setFocus] = useState("patient")
  return (
    <>
      <main className="min-h-[100vh] bg-gradient-to-r from-[#3832af] to-[#01c4fe]">
        <section className=" grid grid-cols-2 ">
          <div className="container grid place-items-center text-white space-y-16 my-28">
            <BsFillRocketFill size={300} className=' animate-bounce-slow' />
            <div className='capitalize text-4xl font-bold text-left py-4 px-16'>
              welcome!
            </div>
          </div>
          <div className='bg-white relative mr-4 rounded-l-[10rem]'>
            <div className={`${styles.toggle} absolute rounded-full right-8 top-8  bg-indigo-500 w-[25rem] h-12 text-white`}>
              <button onClick={() => setFocus("patient")}>Patient</button>
              <button onClick={() => setFocus("hospital")}>Hospital</button>
              <button onClick={() => setFocus("admin")}>Admin</button>

            </div>
            <div className="">
              {focus === "patient" && <PatientLogin />}
              {focus === "hospital" && <HospitalLogin />}
              {focus === "admin" && <AdminLogin />}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
