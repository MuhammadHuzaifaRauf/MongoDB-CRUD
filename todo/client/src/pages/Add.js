import React , { useState , useEffect } from 'react'
import axios from 'axios'



// Clearing initail state
const initialState = {
    title:"",
    location:"",
    description:""
}

export default function Add() {

const [ state , setState] = useState(initialState)
const URL = "http://localhost:8000"


// Handle Change Function
const handleChange = e => {
    const { name , value } = e.target;  
setState( s => ({ ...s, [name] : value }) )
}

// Handle Submit Function

const handleSubmit = e => {
     e.preventDefault();

     let { title , location , description } = state;
     title = title.trim();
     location = location.trim();
     description = description.trim();

     if( title.length < 3 ){ return alert(" Please enter your title correctly ") };
     if( location.length < 3 ){ return alert(" Please enter your location correctly ") };
     if( description.length < 3 ){ return alert(" Please enter your description correctly ") };

     let todo = {
        title , location , description,
        // status:"active",
        // dateCreated: new Date().getTime()
     }

    axios.post( `${ URL }/createTodo` , todo )

    .then( (res) => {
    console.log('res', res);
    } )

    .catch( (err) => {
        console.error( 'err' , err )
    } )


}




  return (
   <div className="py-5">
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="text-center">Add Todo</h1>
            </div>
        </div>


     <div className="card p-3 p-md-4 mx-auto" style={{ maxWidth : 500 }}>

        <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
        <input type="text" placeholder='Title' name='title' className='form-control' onChange={handleChange} />
        </div>
        <div className="col-12 col-md-6 mb-3">
        <input type="text" placeholder='Location' name='location' className='form-control' onChange={handleChange} />
        </div>
        <div className="col-12 mb-3">
            <textarea name="description" placeholder='Description' className='form-control' onChange={handleChange} ></textarea>
        </div>
        <div className="col-12 col-md-6 offset-md-3">
            <button className='btn btn-primary w-100'>Add Todo</button>
        </div>
      </div>
        </form>
     </div>

    </div>
   </div>
  )
}
