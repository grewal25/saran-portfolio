
import './App.css'

import Blog from './Page/Blog/Blog';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Page/Home/Home';


import Navbar from './component/Navbar/Navbar';
import JavaSciptBlog from './Page/JavaScript/JavaScriptBlog';
import Personal from './Page/Personal/Personal';
import About from './Page/About/About';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     
     
  <Switch>
          <Route exact path="/" component={Home}>
           
          </Route>

          <Route  path="/blog" component={Blog}>
          
          </Route>

          <Route  path="/javascript" component={JavaSciptBlog}>
            </Route>

          <Route  path="/personal" component={Personal}>
           
          </Route>
        
          <Route  path="/about" component={About}>
           
          </Route>
        </Switch>
    </BrowserRouter>
    
);
}

export default App;
