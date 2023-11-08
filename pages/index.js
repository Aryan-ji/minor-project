import React from 'react';
import { BsFillRocketFill } from 'react-icons/bs';
export default function Home() {
  return (
    <>
      <main className=" min-h-[100vh] bg-gradient-to-r from-[#3832af] to-[#01c4fe]">
        <section className="container grid grid-cols-2 ">
          <div className="text-white flex flex-col space-y-16 my-28">
            <BsFillRocketFill size={300} className=' animate-bounce-slow' />
            <div className='capitalize text-4xl font-bold text-left py-4 px-16'>
              welcome!
            </div>
          </div>
          <div>I am right section</div>
        </section>
      </main>
    </>
  )
}
