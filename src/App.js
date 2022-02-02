
import './App.css'

import Blog from './Page/Blog/Blog';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Page/Home/Home';


import Navbar from './component/Navbar/Navbar';
import JavaSciptBlog from './Page/JavaScript/JavaScriptBlog';
import Personal from './Page/Personal/Personal';
import About from './Page/About/About';
import JS_ch_01 from './Page/JS-ch-01/JS_ch_01';
import Productivity from './Page/Productivity/Productivity';
import Caching from './Page/caching/Caching';
import VictorFrankl from './Page/VictorFrankl/VictorFrankl';
import Archive from './Page/Archive/Archive';
import Stuck from './Page/Stuck/Stuck';
import Footer from './component/Footer/Footer';



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

          {/* <Route  path="/javascript/types-variables-in-javascript" component={JS_ch_01}>
           
          </Route> */}

          <Route  path="/personal" component={Personal}>
           
          </Route>
        
          <Route  path="/about" component={About}>
           
          </Route>

          <Route  path="/productivity" component={Productivity}>
           
          </Route>

          <Route  path="/caching" component={Caching}>
           
          </Route>
          <Route  path="/not-to-fear-old-age" component={VictorFrankl}>
           
          </Route>
          <Route  path="/archive" component={Archive}>
           
          </Route>
          <Route  path="/how-to-start-when-you-are-stuck" component={Stuck}>
           
          </Route>
          <Route  path="/footer" component={Footer}>
           
          </Route>
        </Switch>
    </BrowserRouter>
    
);
}

export default App;
