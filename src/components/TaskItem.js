
import task from '../task.png'; 

export const TaskItem = ({taskName,taskDescription,dueDate,assignedTo,status}) =>{ 


    return (
        <div class="column card">
            <img src={task} alt="Avatar" class="center" />
            <div class="container">
                <h4><b>{taskName}</b></h4>
                <p>{taskDescription}
                <br/>{dueDate}
                <br/>{assignedTo}
                <br/>{status}
                </p>
                
            </div>
        </div> 
    );
};