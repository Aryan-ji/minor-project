import React, { useEffect } from "react";
import { BsFillRocketFill } from "react-icons/bs";
import styles from '../styles/Home.module.css';
import { useRouter } from "next/router";


export default function Layout({ children }) {
    useEffect(() => {
        console.log(router.asPath, 'router');
    }, [])

    const router = useRouter()
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
                            <button className={`${router.asPath === '/' | router.asPath === '/admin/clientlogin' ? styles.focus : ""}`} onClick={() => router.push("/client/login", "clientlogin", {
                                scroll: true, shallow: true
                            })}>Patient</button>
                            <button onClick={() => router.push("/admin/login")}>Hospital</button>
                            <button onClick={() => router.push("super/login")}>Admin</button>

                        </div>
                        <div className="">
                            {children}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}