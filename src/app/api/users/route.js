import  { dbconn } from "@/helper/db";
import { NextResponse } from "next/server";
import { users } from "@/models/users";
import bcrypt from "bcryptjs";
dbconn();

//GET USERS
export async function GET(request){
    let get_users = [];
    try{
        get_users = await users.find().select("-password");
        return NextResponse.json(get_users);
    }
    catch(error){
        console.log(error);
        return NextResponse.json({
            message : "Failed to fetch users",
        },{
            status : 500
        });
    }
}

//POST USER
export async function POST(request){
    const {name, email, password, about, profileURL} = await request.json();

    const user = new users({
        name,
        email,
        password,
        about,
        profileURL
    });

   try{
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
    console.log(user);
    await user.save();
    return NextResponse.json(user, {
        status:201,
    });
   }
   catch(error)
   {
      console.log(error);
      return NextResponse.json({
        message : "Failed to create user",
      },{
        status : 500
      })
   }
}