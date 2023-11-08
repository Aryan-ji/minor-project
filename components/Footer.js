import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-10 py-4 text-center bg-black text-white'>
            <div>
                All right reserved &copy; {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer