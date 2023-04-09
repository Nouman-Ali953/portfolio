const mongoose = require("mongoose");


const newSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    email:{
        type:String,
        required:true
    },
    messege:String
});



const Student = new mongoose.model("Student",newSchema);

module.exports = Student;





