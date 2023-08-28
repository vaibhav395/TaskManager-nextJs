import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    adddate : {
        type : Date,
        required : true,
        default : Date.now(),
    },
    status : {
        type: String,
        enum : ["Pending", "Completed"],
        default : "Pending"
    },
    userId : 
    {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
    },
});

export const tasks = mongoose.models.tasks || mongoose.model("tasks", taskSchema);