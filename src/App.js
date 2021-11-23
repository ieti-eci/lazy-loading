/** 
import { Login } from "./components/Login";
import { Home} from "./components/Home";  
import { NewTask } from "./components/NewTask"; 


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() { 
  
  return ( 
    <Router>
    <Switch>
      <Route exact path="/Login" component={Login} />
      <Route path="/Home" component={Home} /> 
      <Route path="/newTask" component={NewTask} />
    </Switch>
  </Router>
    
  );
}
export default App; 
*/

import {Suspense,lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const Login = lazy(()=>import("./components/Login"))
const Home = lazy(()=>import("./components/Home"))
const NewTask = lazy(()=>import("./components/NewTask"))

function App() { 
  
  return ( 
    <Router>
    <Switch>
      <Route exact path="/Login"
         render= { () => ( 
          <Suspense fallback={<h1>Cargando...</h1>}>  
            <Login />
          </Suspense>
          )}  
       />
      <Route path="/Home" 
        render= { () => ( 
          <Suspense fallback={<h1>Cargando...</h1>}>  
            <Home /> 
          </Suspense>  
        )} 
      /> 
      <Route path="/newTask"
        render= { () => ( 
          <Suspense fallback={<h1>Cargando...</h1>}>  
                  <NewTask />
          </Suspense>
        )}  />
    </Switch>
  </Router>
    
  );
}


export default App;  