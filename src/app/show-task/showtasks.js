"use client";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import mongoose from "mongoose";
import UserContext from "@/context/userContext";
import { getTaskofUser } from "@/services/taskService";
import Task from "./Task";
import { delteTaskofUser } from '@/services/taskService';

const Showtasks = () => {
    const context = useContext(UserContext);
    const userid = context.user?._id; // Using optional chaining to avoid errors

    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        async function loadtasks(userid) {
            try {
                const ttask = await getTaskofUser(userid);
                if (ttask.length > 0) { 
                    console.log("Tasks before setting: ", tasks);
                    setTasks((prevTasks) => [...prevTasks, ...ttask]); // Update using functional update
                    // toast.success("Tasks done", {
                    //     position: toast.POSITION.TOP_CENTER,
                    // });
                }
            } catch (err) {
                console.log("Error : ", err);
                // toast.error(err.response?.data?.message || "An error occurred", {
                //     position: toast.POSITION.TOP_CENTER,
                // });
            }
        }
        if (context.user) {
            loadtasks(userid);
        }
    }, [context.user]);

    if(tasks.length>0)
    console.log("Tasks after setting: ", tasks);

    const deleteTaskfromShowTasks = async (taskId)=>{
        try{
            await delteTaskofUser(taskId);
            const newTasks = tasks.filter(item=>(item._id!=taskId))
            setTasks(newTasks);
            toast.success("Task Deleted", {
                position : toast.POSITION.TOP_CENTER,
            })

        }
        catch(err)
        {
            console.log(err);
            toast.error(err.message, {
                position : toast.POSITION.TOP_CENTER,
            })
        }
    }


    return (
        <div className="grid grid-cols-12 mt-3">
            <div className="col-span-6 col-start-4">
            <h1 className="text-3xl text-center">Your tasks ( {tasks.length} )</h1>
            {tasks.map((task)=>(
                <Task task={task} key={task._id} deleteTaskfromShowTasks={deleteTaskfromShowTasks}/>
            ))}
            </div>
        </div>
    );
};

export default Showtasks;
