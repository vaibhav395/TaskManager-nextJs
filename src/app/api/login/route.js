import { users } from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";
import { dbconn } from "@/helper/db";

dbconn();
export async function POST(request)
{

    const {email, password} = await request.json();
    try
    {
        // 1. EXTRACTING USER
        const user = await users.findOne({
            email : email,
        });

        if(user==null)
        {
            throw new Error("User not found !!!");
        }

        // 2. CHECKING PASSWORD
        const matched = bcrypt.compareSync(password, user.password);
        if(!matched)
        {
            throw new Error("Invalid password!!");
        }

        // 3. GENERATE TOKEN
        const token = jwt.sign({
            _id : user._id,
            name : user.name
        },process.env.JWT_KEY);


        // 4. CREATE RESPONSE --COOKIES
        const response = NextResponse.json({
            message : "Login success!!",
            success : true,
            user
        })


        // 5. SET COOKIES
        response.cookies.set("authToken", token, {
            expiresIn : "1d",
            httpOnly : true  
        })

        return response;

    }
    catch(err)
    {
        return NextResponse.json({
            message : err.message,
            status : false
        },{
            status : 500
        })
    };
}



// When creating login api
// step 1 : fetch user from email id he entered.
// step 2 : check the password of that user whether it is right / wrong.
// step 3 : create token.
// step 4 : create response.
// step 5 : set cookies.


// HTTP-only cookies are cookies that are marked with the "HttpOnly" 
// flag in the response headers when they are set. This flag indicates 
// to the browser that the cookie cannot be accessed via client-side 
// scripts like JavaScript, making it more secure against certain types 
// of attacks like XSS.  HTTP-only cookies are stored in the same location
//  as regular cookies, which is typically the browser's cookie storage. 
//  However, since HTTP-only cookies cannot be accessed by client-side scripts, 
//  they are not accessible via JavaScript or other client-side programming languages. 
//  Instead, they are only sent to the server with each HTTP request.