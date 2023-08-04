import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dash';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotReached from './NotReached';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Switch>
        <Route exact path = '/'>
              <Dashboard  />
         </Route>

         <Route path = '/create'>
            <Create  />
         </Route>
         <Route path = '/blogs/:id'>
            <BlogDetails  />
         </Route>
        <Route>
            <NotReached />
        </Route>
         </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
