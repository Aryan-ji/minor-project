import Link from 'next/link'
import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { BiLogOut } from 'react-icons/bi';

function AdminNav() {
    return (<>
        <nav className='bg-gradient-to-r from-[#3832af] to-[#01c4fe] py-6 grid grid-cols-2'>
            <div className="logo text-white uppercase font-bold text-xl pl-52 ">
                <Link href={"/"} className='flex space-x-2'>
                    <FaUserPlus size={25} />
                    <span>Global Hospital</span>
                </Link>
            </div>
            <div className="navigation">
                <ul className='flex justify-center space-x-20 uppercase text-white font-bold'>

                    <li>
                        <Link className='flex space-x-2' href={"/logout"}>
                            <BiLogOut size={25}/>
                            <span>Logout</span>
                        </Link></li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default AdminNav