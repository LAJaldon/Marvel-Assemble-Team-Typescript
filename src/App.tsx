import './App.css'
import AssembleTeam from './Pages/AssembleTeam';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path='/'>
            <AssembleTeam />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
