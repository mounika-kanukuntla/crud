import React from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { useEffect,useState} from 'react';

const GetUsers = () => {
    let[state,setstate]= useState([]);
    let[thead,setthead]= useState([]);
    let nav= useNavigate()
    useEffect(()=>{
     axios.get("http://localhost:3030/users")
     .then(x=>
       {setstate(x.data)
        setthead(Object.keys(x.data[0]).slice(0,4))
       })
       .catch(()=>{console.log("faild to fetch");
       })
    },[state])
    function del(id) {
        axios.delete(`http://localhost:3030/users/${id}`)
        .then(()=>{
            nav("/")
        })
        .catch(()=>{console.log("ERROR");
        })
        
    }
  return (
      <table border={1}>
        <caption>
            <strong id="header">CRUD OPERATION</strong>
            <button onClick={()=>nav("/add")} id="sub1">ADD+</button>
        </caption>
         <thead>
         <tr>
            {thead.map((x,ind)=><th key={ind}>{x}</th>)}
             <th id="rw6">operation</th>
          </tr>
         </thead>
         <tbody>
            {state.map(x=>{
               return(
                <tr key={x.id} id="rw">
                   <td id="rw1">{x.id}</td>
                   <td id="rw2">{x.name}</td>
                   <td id="rw3">{x.username}</td>
                   <td id="rw4">{x.email}</td>
                   <td id="rw5">
                    <Link to={`/edit/${x.id}`}><button>Edit</button></Link><button onClick={()=>del(x.id)}>Delete</button>
                   </td> 
                </tr>
            )})}
            
         </tbody>
      </table>
  )
}

export default GetUsers
