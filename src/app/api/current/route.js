import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { users } from "@/models/users";
// import { dbconn } from "@/helper/db";
// dbconn();
export async function GET(request) {
    let authToken = await request.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, process.env.JWT_KEY);  //it will return data present in token.
    console.log(data);
    console.log("API token : ", authToken);

    const user = await users.findOne({
        name : data.name
    }).select("-password");
    return NextResponse.json(user);
}