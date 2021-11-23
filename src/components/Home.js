/** 
import {TaskItem} from "./TaskItem";   
import '../Home.css';
import { useHistory,useLocation } from 'react-router-dom'; 
import {useState} from "react";

export const Home = () => { 
    
    var tasksT;
    try{  
        const location = useLocation();  
        tasksT = location.state.tasks.tasksAdded;  
      
    }catch(error){
        console.log("viene de login o cancel"); 
        tasksT =  [  { 
            isCompleted: "Revised",
            name: "Learn React Ada", 
            description:"Intensive Course", 
            date:"2022-03-31",
            assigned:"David Coronado",
  
          },]
    }


    const [tasks,setTasks] = useState(
        tasksT
      ); 



    const history = useHistory();
    const handleClick = () => history.push({pathname:"/newTask",
        state: {tasksAdded:tasks}
    });
    const handleClickLogout = () => history.push("/Login"); 
    


    return ( 

            
            <div class= "row fixed"> 
                <h1>Task List</h1>  
                {tasks.map((task,index)=>{
                    return( 
                        
                        <TaskItem 
                        taskName={task.name}
                        taskDescription={task.description} 
                        dueDate={task.date}
                        assignedTo={task.assigned}
                        status={task.isCompleted}
                    />
                    );

                    })}
                <button onClick={handleClick} class="button button1">New Task</button> 
                <button onClick={handleClickLogout} class="button button1">Logout</button>
            </div>

        
      );

}; 
*/ 
import {TaskItem} from "./TaskItem";   
import '../Home.css';
import { useHistory,useLocation } from 'react-router-dom'; 
import {useState} from "react";


export const Home = () => { 
    
    var tasksT;
    try{  
        const location = useLocation();  
        tasksT = location.state.tasks.tasksAdded;  
      
    }catch(error){
        console.log("viene de login o cancel"); 
        tasksT =  [  { 
            isCompleted: "Revised",
            name: "Learn React Ada", 
            description:"Intensive Course", 
            date:"2022-03-31",
            assigned:"David Coronado",
  
          },]
    }


    const [tasks,setTasks] = useState(
        tasksT
      ); 



    const history = useHistory();
    const handleClick = () => history.push({pathname:"/newTask",
        state: {tasksAdded:tasks}
    });
    const handleClickLogout = () => history.push("/Login"); 
    


    return ( 

            
            <div class= "row fixed"> 
                <h1>Task List</h1>  
                {tasks.map((task,index)=>{
                    return( 
                        
                        <TaskItem 
                        taskName={task.name}
                        taskDescription={task.description} 
                        dueDate={task.date}
                        assignedTo={task.assigned}
                        status={task.isCompleted}
                    />
                    );

                    })}
                <button onClick={handleClick} class="button button1">New Task</button> 
                <button onClick={handleClickLogout} class="button button1">Logout</button>
            </div>

        
      );

};  
