
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Home from './Home';
import ProblemPage from './ProblemPage';
import CourseCatalogue from './CourseCatalogue';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import QuizApp from './QuizApp';
import CourseLanding from "./CourseLanding";
import Hometest from './Hometest'; 
import Login from './Login.jsx';


function App() {
  return (
    
    <Router>
    
    <div className="App">
      
        
          <Header /> 
          
         
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/courses" component={CourseCatalogue}/>
         <Route exact path="/courselanding" component={CourseLanding}/>
         <Route exact path="/problem" component={ProblemPage}/>
         <Route exact path="/test" component={Hometest}/>
         <Route exact path="/login" component={Login}/>
         </Switch>
        
           
          
        
  </div>
  </Router>
  );
}

export default App;
