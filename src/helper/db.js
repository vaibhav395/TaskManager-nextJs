import mongoose from "mongoose";
import {users} from "@/models/users"
export const dbconn = async ()=>{
    try{
        const {connection} = await mongoose.connect(process.env.MONGO_URL,{
            dbName:"work-manager",
        });
        console.log("db connected...");
        console.log(connection);

        //testing and creating new user
        // const uuser = new users({
        //     name:"Vaibhav Thareja",
        //     email:"test@gmail.com",
        //     password:"hello",
        //     about:"this is testing",
        // });

        // await uuser.save();

        // console.log("User is created!!");
    }
    catch(error){
        console.log("failed to connect...");
        console.log(error);
    }
}