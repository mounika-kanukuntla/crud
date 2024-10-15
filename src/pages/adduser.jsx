import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    let[value,setvalue]=useState({username:"",email:""});
    let change=(e)=>{
         setvalue({...value,[e.target.name]:[e.target.value]})
    }
    let Navigate=useNavigate()
    function adduser(e){
        e.preventDefault()
        axios.post("http://localhost:3030/users",value)
        .then(()=>{
            Navigate("/")
        }).catch(()=>console.log("error"))
    }
  return (
    <div className='main'>
        <h1 id="Add">Add a new user</h1>
        <input type="text"  placeholder='username' name='username' value={value.username} onChange={change}/>
        <br />
        <input type="email" placeholder='email'  name="email" value={value.email} onChange={change}/>
        <br />
        <button onClick={adduser}>ADD USER</button>
    </div>
  )
}

export default AddUsers
