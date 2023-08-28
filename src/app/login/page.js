"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import img from "../../assests/authentication.svg";
import { toast } from "react-toastify";
import loginUser from "@/services/loginService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

const Login = () => {
    const router = useRouter();
    const context = useContext(UserContext);

    const [loginData, setLogindata] = useState({
        email: "",
        password: ""
    })

    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        console.log(loginData);

        //VALIDATIONS
        if(loginData.email.trim()==="" || loginData.email==null)
        {
            toast.warning("Email is required",{
                position : toast.POSITION.TOP_CENTER
            })
            return;
        }
        if(loginData.password.trim()==="" || loginData.password==null)
        {
            toast.warning("Password is required",{
                position : toast.POSITION.TOP_CENTER
            })
            return;
        }

        // LOGIN
        try{
            const result = await loginUser(loginData);
            console.log("API response : ", result);
            toast.success("You are logged in", {
                position : toast.POSITION.TOP_CENTER
            })

            setLogindata({
                email : "",
                password : ""
            })

            context.setUser(result.user);

            //REDIRECT AFTER LOGIN
            router.push("/");
        }
        catch(err)
        {
            console.log(err);
            toast.error(err.response.data.message, {
                position : toast.POSITION.TOP_CENTER
            })
        }
    }

    const reset = ()=>{
        setLogindata({
            email : "",
            password : ""
        })

        toast.success("Reset Done!",{
            position : toast.POSITION.TOP_CENTER,
        })
    }

    return (
        <div className="grid grid-cols-12 mt-5">
            <div className="p-5 col-span-4 col-start-5 shadow-sm shadow-gray-400 my-5 rounded-lg">
                <div className="my-5 flex justify-center">
                    <Image className="w-1/2" src={img} alt="image"></Image>
                </div>
                <h1 className="text-3xl text-center">Login here</h1>
                <form action="#" onSubmit={loginFormSubmitted}>

                    {/* EMAIL */}
                    <div>
                        <label htmlFor="user_login_email" className="block mt-5 text-lg font-semibold text-slate-700">
                            Email
                        </label>
                        <input type="email" name="user_login_email" id="user_login_email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your mail" onChange={(event) => {
                                setLogindata({
                                    ...loginData,
                                    email: event.target.value,
                                })
                            }} value={loginData.email} />
                    </div>


                    {/* PASSWORD */}
                    <div>
                        <label htmlFor="user_login_password" className="block mt-5 text-lg font-semibold text-slate-700">
                            Password
                        </label>
                        <input type="password" name="user_login_password" id="user_login_password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter your password" onChange={(event) => {
                                setLogindata({
                                    ...loginData,
                                    password: event.target.value,
                                })
                            }} value={loginData.password} />
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-center space-x-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Login
                        </button>
                        <button onClick={reset} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Reset
                        </button>
                    </div>
                </form>
                {/* {JSON.stringify(loginData)} */}
            </div>
        </div>
    )
}

export default Login;