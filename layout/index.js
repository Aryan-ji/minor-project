import { BsFillRocketFill } from "react-icons/bs";

export default function Layout({ children }) {
    return (
        <>
            <section className="flex justify-center mt-10 ">
                <div className="text-4xl font-bold text-center text-indigo-500 mt-10">
                    {children}
                </div>
            </section>
        </>
    )
}