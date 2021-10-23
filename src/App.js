import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
 
  return (
  <div>
     <Router>
     <Navbar/>
         <Switch> 
           <Route exact path="/">
           <News key="general" category="general"></News>
          </Route>
          <Route exact path="/business">
          <News key="business" category="business"></News>
          </Route>

          <Route exact path="/entertainment">
          <News  key="entertainment" category="entertainment"></News>
          </Route>

          <Route exact path="/sport">
          <News  key="sport"category="sport"></News>
          </Route>

          <Route  exact path="/technology">
          <News key="technology" category="technology"></News>
          </Route>

        </Switch>
</Router>
</div>
  );
}
 


 