const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://paridaanshuman48:Xs858GrvWeZ8O176@cluster0.lpjkkoj.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const  todo = mongoose.model('todos' ,todoSchema);
module.exports = {
    todo
}