
import './App.css'

import Blog from './Page/Blog/Blog';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import Skills from './Page/Skills/Skills';


import Navbar from './component/Navbar/Navbar';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     
     
  <Switch>
          <Route exact path="/" component={Home}>
           
          </Route>

          <Route  path="/blog" component={Blog}>
          
          </Route>

          <Route  path="/skills" component={Skills}>
           
          </Route>
        
        </Switch>
    </BrowserRouter>
    
);
}

export default App;
