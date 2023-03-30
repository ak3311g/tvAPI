import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Nav from "./components/nav";
import About from './pages/about';
import Homepage from './pages/homepage';
import Singlepage from './pages/singlepage';
import ShowsState from './context/shows/showsState';

function App() {
  return (
    <Router className="App">
      <Nav/>

      <div className='block'>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path="/singleshow/:id" component={Singlepage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
