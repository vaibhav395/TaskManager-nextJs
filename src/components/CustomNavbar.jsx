'use client';
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import Logout from "@/services/logoutService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";


const CustomNavbar = () => {
    const context = useContext(UserContext);
    console.log(context);

    const router = useRouter();

    const dologout = async () => {
        try {
            const res = await Logout();
            console.log(res);
            context.setUser(undefined);
            router.push("/login");
            toast.success("Logged Out", {
                position: toast.POSITION.TOP_CENTER
            })
        }
        catch (err) {
            console.log(err);
            toast.error("Error in logging out", {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }
    return (
        <nav className="bg-blue-600 h-12 px-3 flex justify-between items-center text-white shadow-xl">

            <div>
                <h1 className="text-2xl font-serif"><a href="#">Work Manager</a></h1>
            </div>

            <div>
                <ul className="flex space-x-5">
                    {context.user && (
                        <><li className="hover:font-semibold"> <Link href={"/"}>Home</Link></li>
                            <li className="hover:font-semibold"><Link href={"/add-task"}>Add Tasks</Link></li>
                            <li className="hover:font-semibold"><Link href={"/show-task"}>Show Tasks</Link></li></>
                    )}
                </ul>
            </div>


            <div>
                <ul className="flex space-x-5">
                    {!context.user && (
                        <><li className="hover:font-semibold">
                            <div className="flex space-x-1 justify-center">
                                <Link href={"/login"}>Login</Link>
                                <AiOutlineLogin className="text-lg text-center" />

                            </div>
                        </li>
                        <span>||</span>

                            <li className="hover:font-semibold mr-2">
                                <div className="flex space-x-1 justify-center">
                                    <Link href={"/signup"}>SignUp</Link>
                                    <SiGnuprivacyguard />
                                </div>
                            </li>
                        </>
                    )}
                    {
                        context.user && (
                            <><li className="hover:font-semibold"><Link href={"#"}>{context.user.name}</Link></li>
                            <span>||</span>
                                <li className="hover:font-semibold">
                                    <div className="flex space-x-2">
                                        <button onClick={dologout}>Logout</button>
                                        <AiOutlineLogout />
                                    </div>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default CustomNavbar;