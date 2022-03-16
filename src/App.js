
import './App.css'

import Blog from './Page/Blog/Blog';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Page/Home/Home';


import Navbar from './component/Navbar/Navbar';
import JavaSciptBlog from './Page/JavaScript/JavaScriptBlog';
import Personal from './Page/Personal/Personal';
import About from './Page/About/About';
import Productivity from './Page/Productivity/Productivity';
import Caching from './Page/caching/Caching';
import VictorFrankl from './Page/VictorFrankl/VictorFrankl';
import Archive from './Page/Archive/Archive';
import Stuck from './Page/Stuck/Stuck';
import Footer from './component/Footer/Footer';
import Development from './Page/development/Development';
import MainPage from './Page/Home/MainPage';
import Tutorial from './Page/Tutorials/Tutorial';
import SubscribeForm from './mailChimp/SubscribeForm';
import ToggleReact from './Page/Tutorials/ToggleReact';
import FormsReact from './Page/Tutorials/FormsReact';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
     
     
  <Switch>
           <Route exact path="/" component={Home}>
           
           </Route>
          <Route  path="/about" component={MainPage}>
           
          </Route>

          <Route  path="/how-to-create-a-toggle-button-in-react" component={ToggleReact}>
           
          </Route>

          <Route  path="/forms-react" component={FormsReact}>
           
          </Route>
          
          <Route  path="/mail" component={SubscribeForm}>
           
          </Route>
          

          <Route path="/development" component={Development}>
           
           </Route>

           <Route path="/tutorials" component={Tutorial}>
           
           </Route>

           <Route path="/main" component={MainPage}>
           
           </Route>

          <Route  path="/blog" component={Blog}>
          
          </Route>

          <Route  path="/javascript" component={JavaSciptBlog}>
            </Route>

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
          <Route  path="/essays" component={Archive}>
           
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
