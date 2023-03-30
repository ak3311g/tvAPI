import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Nav from "./components/nav";
import About from './pages/about';
import Homepage from './pages/homepage';
import Singlepage from './pages/singlepage';
import ShowsState from './context/shows/showsState';
import Buyticket from './pages/buyticket';

function App() {
  return (
    <Router className="App">
      <Nav/>

      <div className='block'>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path="/singleshow/:id" component={Singlepage}/>
            <Route exact path="/buyticket/:id" component={Buyticket}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
