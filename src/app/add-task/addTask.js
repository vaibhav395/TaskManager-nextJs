"use client";
import { useState } from "react";
import loginSvg from "../../assests/login.svg";
import Image from "next/image";
import {Addtaskservice} from "@/services/taskService";
import { toast } from "react-toastify";


export const metadata = {
    title: "Add Task : Work-manager"
}



const Addtasks = () => {

    const [task, setTask] = useState({
        title : "",
        content : "",
        status : "none",
        userId : ""
    });


    // Adding the task to the database
    const handleAddtask = async (event)=>{
        event.preventDefault();
        console.log("State : ", task);

        //validate task data

        //fetch data
        try{
            const result = await Addtaskservice(task);
            console.log("api result : ", result);
            toast.success("Your task is added !!!", {
                position: toast.POSITION.TOP_CENTER,
            })
            setTask({
                title : "",
                content : "",
                status : "none",
            })
        }
        catch(err)
        {
            console.log(err);
            toast.error("Task not added!",{
                position: toast.POSITION.TOP_CENTER,
            });
        }
    }
    return (
        <div className="grid grid-cols-12 justify-center my-5">
            <div className="p-5 col-span-6 col-start-4 shadow-sm shadow-gray-400">
                <div className="my-5 flex justify-center">
                <Image className="w-1/2" src={loginSvg} alt="Image"/>
                </div>
                <h1 className="text-3xl text-center">Add your task here</h1>

                <form action="#" onSubmit={handleAddtask}>
                    {/* Task Title */}
                    <div>
                        <label className="block mt-5 text-lg font-semibold text-slate-700" htmlFor="task_title ">
                            Title
                        </label>
                        <input type="text" name="task_title" id="task_title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="title"
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                title : event.target.value
                            })
                        }} value={task.title}/>
                    </div>

                    {/* Task Content */}
                    <div>
                        <label className="block mt-5 text-lg font-semibold text-slate-700" htmlFor="task_content">
                            Content
                        </label>
                        <textarea name="task_content" id="task_content" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="description" rows={5} 
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                content : event.target.value
                            })
                        }} value={task.content}/>
                    </div>

                    {/* Task Status */}
                    <div>
                        <label className="block mt-5 text-lg font-semibold text-slate-700" htmlFor="task_status">
                            Status
                        </label>
                        <select id="task_status" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                status : event.target.value
                            })
                        }} value={task.status}>

                            <option value={"none"} disabled> ---Select status--- </option>
                            <option value={"Pending"}>Pending</option>
                            <option value={"Completed"}>Completed</option>

                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center space-x-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Add Task
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full mt-7">
                            Clear
                        </button>
                    </div>
                    {
                        // JSON.stringify(task)
                    }
                </form>
            </div>
        </div>
    )
}

export default Addtasks;