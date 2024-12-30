import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MatchList from './components/MatchList';
import BetForm from './components/BetForm';
import BetHistory from './components/BetHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MatchList} />
          <Route path="/bet/:matchId" component={BetForm} />
          <Route path="/history" component={BetHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
