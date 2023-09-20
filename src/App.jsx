import React,{useState,useEffect} from 'react'

const App = () => {
  
  const [users,setUsers]=useState([]);
  
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(json=>setUsers(json))
  
   },[])

  
// /connt APi="https://jsonplaceholder.typicode.com/todos"
    
  return (
    <div>
    <h1>Showing Data</h1>
       <table>
          <tr>
            <th>Title</th>
            <th>Completion</th>
          </tr>

          

          {users.map(user=>(
            <tr key={user.id}>
            <td>{user.title}</td>
            <td>{user.completed}</td>
            </tr>
          ))}
          
        
        
       </table>
    </div>
  )
}

export default App