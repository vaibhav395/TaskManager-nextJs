import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name : String,
    email : {
        type : String,
        unique : true,
        required : [true, "email required!!"],
    },
    password:{
        type:String,
        required:[true, "Password required!!"],
    },
    about : String,
    profileURL: String,
});

export const users = mongoose.models.users || mongoose.model("users", userSchema);