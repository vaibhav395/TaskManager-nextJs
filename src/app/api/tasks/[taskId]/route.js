import { tasks } from "@/models/task";
import { NextResponse } from "next/server";
import { dbconn } from "@/helper/db";

dbconn();
//GET SINGLE TASK
export async function GET(request, { params })
{
    const {taskId} = params;
    try{
        const single_task = await tasks.findById(taskId);
        return NextResponse.json(single_task);
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to fetch single task!"
        })
    }
}


//UPDATE SINGLE TASK
export async function PUT(request, { params })
{
    try{
        const {taskId} = params;
        const {title, content, status} = await request.json();  //inputs given by user.

        let ttask = await tasks.findById(taskId);
        ttask.title = title;
        ttask.content = content;
        ttask.status = status;

        const updated_task = await ttask.save();
        return NextResponse.json(updated_task, {
            message : "Task updated!!"
        })
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to update task!"
        })
    }
}


//DELETE SINGLE TASK
export async function DELETE(request, {params})
{
    const {taskId} = params;
    try{
        await tasks.deleteOne({
            _id : taskId,
        })
        return NextResponse.json({
            message : "Task deleted!!",
        })
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to delete task!",
        })
    }
}