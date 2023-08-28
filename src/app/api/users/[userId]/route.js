import { NextResponse } from "next/server";
import { users } from "@/models/users";
import { dbconn } from "@/helper/db";
dbconn();
//GET SINGLE USER
export async function GET(request, { params })
{
    try{
        const { userId } = await params;
        const single_user = await users.findById(userId);
        return NextResponse.json(single_user);
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to fetch single user!",
        });
    }
}



//DELETE SINGLE USER
export async function DELETE(request, {params})
{
    const { userId } = await params;
    try
    {
        await users.deleteOne({
            _id : userId,
        });
    
        return NextResponse.json({
            message : "User Deleted!!!",
        });
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "Failed to delete user!",
        });
    }
}

//UPDATE SINGLE USER
export async function PUT(request, { params })
{
    const {userId} = params;
    try{
        const {name, email, password, about, profileURL} = await request.json();  //Updated information given by user.

        const uuser = await users.findById(userId);
        uuser.name = name;
        uuser.email = email;
        uuser.password = password;
        uuser.about = about;
        uuser.profileURL = profileURL;

        await   uuser.save();

        return NextResponse.json(uuser);
    }
    catch(err)
    {
        console.log(err);
        return NextResponse.json({
            message : "failed to update user!",
        });
    }
}