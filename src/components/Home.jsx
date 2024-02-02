

import React,{useEffect, useState} from 'react'
import Task from './Task'

function Home() {

// const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
const initialArr = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

const [tasks, settasks] = useState(initialArr);
const [Name, setName] = useState("")
const [Number, setNumber] = useState("")
const submithandle = (e) => {
e.preventDefault();
settasks([...tasks,{
  Name,Number
},])
setName("")
setNumber("")
}



const deleteTask = (index) => {
  const filterArr = tasks.filter((val,i) => {
return i !== index;
})
settasks(filterArr);
}
useEffect(() => {
 localStorage.setItem("tasks",JSON.stringify(tasks))
}, [tasks])

  return (
    <div className="container">
      <form onSubmit={submithandle}>
        <h1>Enter Name to save </h1>
      <input type="text" value={Name} placeholder= "Enter Name here" 
      onChange={(e) =>setName(e.target.value)} />
        <h1>Enter Number to save </h1>
      <textarea  type="text" value={Number} placeholder="Enter number here" 
       onChange={(e) =>setNumber(e.target.value)} ></textarea>
      <button>Add</button>
      </form>
   {tasks.map((item,index)=>(
     <Task key={index} 
     Name={item.Name}
     Number={item.Number}
     deleteTask={deleteTask}
     index={index}
     
     />
   ))}
    </div>
  )
}

export default Home

