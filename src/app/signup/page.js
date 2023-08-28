"use client";
import { useState } from "react"
import signup1 from "../../assests/signup1.svg"
import Image from "next/image"
import { toast } from "react-toastify";
import AdduserService from "@/services/userService";
export const metadata = {
    title: "SignUp : Work-manager"
}

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png"
    });

    const doSignup = async (event) => {
        event.preventDefault();
        console.log(event);

        console.log(data);

        // VALIDATIONS
        if (data.name.trim() === "" || data.name == null) {
            toast.warning("Name is required",
                {
                    position: toast.POSITION.TOP_CENTER
                })
            return;
        }

        if (data.email.trim() === "" || data.email == null) {
            toast.warning("Email is required",
                {
                    position: toast.POSITION.TOP_CENTER
                })
            return;
        }

        if (data.password.trim() === "" || data.password == null) {
            toast.warning("Password is required",
                {
                    position: toast.POSITION.TOP_CENTER
                })
            return;
        }


        try {
            const result = await AdduserService(data);
            console.log("This is result by api", result);

            toast.success("User registered!!", {
                position: toast.POSITION.TOP_CENTER
            })

            setData({
                name: "",
                email: "",
                password: "",
                about: "",
                profileURL: "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png"
            })
        }
        catch (err) {
            console.log(err);
            toast.error("SignUp error !!" + err.response.data.message, {
                position: toast.POSITION.TOP_CENTER,
            })
        }
    }

    const reset = () => {
        setData({
            name: "",
            email: "",
            password: "",
            about: "",
            profileURL: "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png"
        })

        toast.success("Reset Done!",{
            position : toast.POSITION.TOP_CENTER,
        })
    }
    return (
        <div className="grid grid-cols-12 mt-5">
            <div className="p-5 col-span-4 col-start-5 shadow-sm shadow-gray-400 my-5 rounded-lg">
                <div className="my-5 flex justify-center">
                    <Image className="w-1/2" src={signup1} alt="signup page"></Image>
                </div>

                <h1 className="text-3xl text-center">SignUp here</h1>
                <form action="#" onSubmit={doSignup}>
                    {/* Name */}
                    <div>
                        <label htmlFor="user_name" className="block mt-5 text-lg font-semibold text-slate-700">
                            Name
                        </label>
                        <input type="text" name="user_name" id="user_name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your name" onChange={(event) => {
                                setData({
                                    ...data,
                                    name: event.target.value,
                                })
                            }} value={data.name} />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="user_email" className="block mt-5 text-lg font-semibold text-slate-700">
                            Email
                        </label>
                        <input type="email" name="user_email" id="user_email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your mail" onChange={(event) => {
                                setData({
                                    ...data,
                                    email: event.target.value,
                                })
                            }} value={data.email} />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="user_password" className="block mt-5 text-lg font-semibold text-slate-700">
                            Password
                        </label>
                        <input type="password" name="user_password" id="user_password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your password" onChange={(event) => {
                                setData({
                                    ...data,
                                    password: event.target.value,
                                })
                            }} value={data.password} />
                    </div>

                    {/* ABOUT */}
                    <div>
                        <label htmlFor="user_about" className="block mt-5 text-lg font-semibold text-slate-700">
                            About
                        </label>
                        <textarea name="user_about" id="user_about" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            rows={5} onChange={(event) => {
                                setData({
                                    ...data,
                                    about: event.target.value,
                                })
                            }} value={data.about} />
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-center space-x-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Sign Up
                        </button>
                        <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Reset
                        </button>
                    </div>
                    {/* {JSON.stringify(data)} */}
                </form>
            </div>
        </div>
    )
}

export default SignUp;