import {tasks} from "@/models/task";
import { NextResponse } from "next/server";
import { dbconn } from "@/helper/db";
import jwt from "jsonwebtoken";
dbconn();
//GET ALL THE TASKS
export async function GET(request)
{
    try{
        const get_all_tasks = await tasks.find();
        return NextResponse.json(get_all_tasks);
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to fetch all tasks!"
        })
    }

}


export async function POST(request)
{
    let authToken = await request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    const {title, content, status} = await request.json();
    try{
        const all_tasks = await new tasks({
            title,
            content,
            status,
            userId : data._id,
        })

        await all_tasks.save();
        return NextResponse.json(all_tasks);
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to create tasks!",
        })
    }
}