import { tasks } from "@/models/task";
import { NextResponse } from "next/server";
import { dbconn } from "@/helper/db";
dbconn();
export async function GET(request, {params})
{
    let{userId} = params;
    console.log("Route id : ", userId)
    try{
        const user_tasks = await tasks.find({
            userId : userId,
        })
        return NextResponse.json(user_tasks, {
            message : "Tasks fetched successfully!!"
        })
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to fetch particular users tasks" + err,
            success : false
        },{
            status : 401
        })
    }
}