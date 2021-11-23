
import '../NewTask.css'; 
import { useHistory,useLocation } from 'react-router-dom'; 

export const NewTask = () => { 


    const location = useLocation(); 
    const tasksAdded = location.state.tasksAdded;

    const history = useHistory();
    const handleClickCancel = () => history.push("/Home");
    const handleClickSubmit = () => { 
        
        var select = document.getElementById('lstatus');
        var valueStatus = select.options[select.selectedIndex].value;

        const newTask = {
            isCompleted:valueStatus,
            name: document.getElementById("fname").value, 
            description:document.getElementById("ldescription").value, 
            date:document.getElementById("ldate").value,
            assigned:document.getElementById("lassigned").value,
        }; 
        
        tasksAdded.push(newTask);

        alert("Task saved");
        history.push({
            pathname: '/Home',
            state: { tasks: { tasksAdded} 
             }
        })
    
    };

    return(
        <div> 
            <h1>New Task</h1>
            <form  onSubmit={handleClickSubmit}>
                <label for="fname">Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Name task.." required/>

                <label for="ldescription">Description</label>
                <input type="text" id="ldescription" name="ldescription" placeholder="Description task.." required/> 

                <label for="ldate">Due Date</label>
                <input type="text" id="ldate" name="ldate" placeholder="AAAA-MM-DD" required/> 

                <label for="lassigned">Assigned to</label>
                <input type="text" id="lassigned" name="lassigned" placeholder="Name Student" required/>



                <label for="lstatus">Status</label>
                <select id="lstatus" name="country">
                    <option value="Revised">Revised</option>
                    <option value="No revised">No revised</option>
                </select>
            
                <input type="submit" value="Submit"/> 
                <button class="buttonCancel"onClick={handleClickCancel}>Cancel</button>
            </form>
    </div>
    );


}