import UserContext from '@/context/userContext';
import React, { useContext } from 'react';
import {RxCrossCircled} from "react-icons/rx";

const Task = ({task, deleteTaskfromShowTasks}) => {
    const {user} = useContext(UserContext);

    const deleteTask = async (taskId)=>{
        await deleteTaskfromShowTasks(taskId)
    }
    return (
        <div className="border p-6 m-4 bg-white shadow-lg rounded-lg">
            <div className='flex justify-between'>
            <h2 className="text-xl font-semibold text-gray-800">Title : {task.title}</h2>
            <span onClick={()=>{deleteTask(task._id)}} className='text-xl cursor-pointer hover:semibold'>
            <RxCrossCircled/>
            </span>
            </div>
            <p className="text-gray-600 my-2">Description : {task.content}</p>
            <div className="flex justify-between items-center mt-4 ">
                <p className="text-gray-500">Date of adding the task :  {task.adddate}</p>
                <span
                 
                    className={`text-sm  px-2 py-1 rounded ${
                        task.status == 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-800'
                    }`}
                >
                    {task.status}
                </span>
            </div>
            <div className='mt-6'><b>Author : {user?.name}</b></div>
        </div>
    );
}

export default Task;
