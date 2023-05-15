import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please add a task"]
        },
        complete: {
            type: Boolean,
            required: true,
            default: false
        },
    },
    {
        timestamps: true
    }
);
const Task = mongoose.model("task", taskSchema);
export default Task;