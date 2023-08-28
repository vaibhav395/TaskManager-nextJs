"use client";
import { useEffect, useState } from "react";
import UserContext from "./userContext";
import CurrentUserService from "@/services/currentService";
import { toast } from "react-toastify";

const UserProvider = ({children})=>{
    const [user, setUser] = useState({});

    useEffect(()=>{
        async function load()
        {
            try{
                const current_user = await CurrentUserService();
                setUser(current_user);
                // toast.success("loading user", {
                //     position : toast.POSITION.TOP_CENTER
                // })
            }
            catch(err)
            {
                console.log(err);
                toast.info("Please Login", {
                    position : toast.POSITION.TOP_CENTER
                })
                setUser(undefined);
            }
        }
        load();
    }, []);


    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;