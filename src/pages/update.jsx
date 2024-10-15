import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useNavigate ,useParams} from 'react-router-dom';

const Update = () => {
    let[value,setvalue]=useState({username:"",email:""});
    let change=(e)=>{
         setvalue({...value,[e.target.name]:[e.target.value]})
    }
    let Navigate=useNavigate()
    let {id}=useParams()
    useEffect(()=>{
        axios.get("http://localhost:3030/users/"+id).then((x)=>{setvalue(x.data)}).catch(()=>{console.log("faild to fetch");
        })
    },[])
    function Updates(e) {
        e.preventDefault()
        axios.put("http://localhost:3030/users"+id,value).then(x=>Navigate("/")).catch(()=>{console.log("failed to fetch");
        })
    }
  return (
    <div className='main'>
        <h1 id="Add">Update the data</h1>
        <input type="text"  placeholder='username' name='username' value={value.username} onChange={change}/>
        <br />
        <input type="email" placeholder='email'  name="email" value={value.email} onChange={change}/>
        <br />
        <button onClick={Updates}>Update</button>
    </div>
  )
}

export default Update