

// import React from 'react';

// const Task = ({title,descripiton,deleteTask,index}) => {
//   return (
//     <div className="task">
// <div>
//     <p>{title}</p>
//     <span>{descripiton}</span>
    
// </div>
//     <button onClick={() => {deleteTask(index)}}>-</button>  
//     </div>
    
//   );
// };

// export default Task;

import React from 'react'

const Task = ({Name,Number,deleteTask,index}) => {

  return (
    
      <div className="task">
         <div>
          <h3>{Name}</h3>
          <span>{Number}</span>
         </div>
         <button onClick={()=>{deleteTask(index)}}>-</button>
    </div>
  )
}

export default Task
