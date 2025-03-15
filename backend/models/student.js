import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

})

const StudentModel = mongoose.model("students", studentSchema)

export {StudentModel};