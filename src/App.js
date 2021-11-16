
import './App.css'

import Blog from './Page/Blog/Blog';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Page/Home/Home';


import Navbar from './component/Navbar/Navbar';
import JavaSciptBlog from './Page/JavaScript/JavaScriptBlog';
import Personal from './Page/Personal/Personal';
import About from './Page/About/About';
import JS_ch_01 from './Page/JS-ch-01/JS_ch_01';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     
     
  <Switch>
          <Route exact path="/" component={Home}>
           
          </Route>

          <Route  path="/blog" component={Blog}>
          
          </Route>

          <Route  exact path="/javascript" component={JavaSciptBlog}>
            </Route>

          <Route  path="/javascript/types-variables-in-javascript" component={JS_ch_01}>
           
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
