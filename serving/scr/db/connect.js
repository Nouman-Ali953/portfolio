const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb+srv://Nouman:ArfaCareem123@newathome.88tuh.mongodb.net/next?retryWrites=true&w=majority").then(()=>{console.log("DataBase is connected")}).catch((e)=>{
    console.log(`Invalid connection to DataBase ${e}`);
})


module.exports = connect;
