import React from 'react'
import Layout from '@/layout/index'
import styles from '@/styles/PatientLogin.module.css'
import Link from 'next/link'
const PatientLogin = () => {
    return (
        <Layout>
            <h2 className='mt-32 text-5xl text-center text-indigo-700 font-medium'>Register as patient</h2>
            <section className="grid grid-cols-2 w-full place-items-center mt-10 text-black">
                <div className={`${styles.left} w-fit my-auto`}>
                    <input type="text" id='fname' name='fname' placeholder='First Name' />
                    <input type="email" name="email" id="email" placeholder='Your Email' />
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                    <div className={`${styles.gender}`}>
                        <input type="radio" name="gender" id="male" /><label htmlFor='male'>male</label>
                        <input type="radio" name="gender" id="female" /><label htmlFor='female'>female</label>
                    </div>
                    <Link href='/client/login' className={`${styles.login} text-left w-fit text-indigo-500`}>
                        <span>Already have an account?</span>
                    </Link>
                </div>
                <div className={`${styles.right} w-full my-auto`}>
                    <input type="text" id='lname' name='lname' placeholder='Last Name' />
                    <input type="tel" name="phone" id="phone" placeholder='Your Phone' />
                    <input type="password" name="cpassword" id="cpassword" placeholder='Confirm Password' />
                    <input type="submit" value="Register Now" />
                </div>
            </section>
        </Layout>
    )
}

export default PatientLogin