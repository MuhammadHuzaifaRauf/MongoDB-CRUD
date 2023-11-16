const express = require( "express" );
const app = express();
const cors = require ( "cors" );
const mongoose = require ( "mongoose" );


let mongo_URL ="mongodb+srv://mhuzaifarauf:huzaifadev@cluster0.yo1jkfh.mongodb.net/todo?retryWrites=true&w=majority"
 mongoose.connect(mongo_URL);

 const TodoModel = require( "./model/Todo" );

app.use( cors() );
app.use( express.json() )


app.post( "/createTodo" ,  async( req , res) => {
     const todo = req.body;
    const newTodo = new TodoModel(todo);
   
     try {
        await newTodo.save();
        res.json(todo)

     } catch (err) {
        res.json(err)
     }
} )

const PORT = 8000;
app.listen( PORT, () => {
    console.log("Server is running perfectly on port :", PORT)
} )