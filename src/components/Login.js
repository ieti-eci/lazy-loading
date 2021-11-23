
import '../Home.css';
import { useHistory } from 'react-router-dom';
export const Login = function() {

    const history = useHistory();
    const handleClick = () => history.push('/Home');



    return (
    
    <form onSubmit={handleClick}>
        <input   type="text" placeholder="username" required/> 
        <input   type="text" placeholder="password" required/> 
        <button class="button button1" type="submit">Login</button>
      </form>
         
    );

}
