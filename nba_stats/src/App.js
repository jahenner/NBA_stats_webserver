import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation.js';
import HomePage from './pages/HomePage';
import Cities from './pages/Cities';
import Players from './pages/Players';
import Teams from './pages/Teams'
import Games from './pages/Games'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>NBA Stats</h1>
        </header>
        <Navigation />
        <main className="App-main">
          <Route path="/" exact><HomePage /></Route>
          <Route path="/teams"><Teams/></Route>
          <Route path="/players"><Players/></Route>
          <Route path="/cities"><Cities/></Route>
          <Route path="/games"><Games/></Route>
        </main>
        <footer className="App-footer">
          <p>&copy; Alex Henner and Ali Alameedi</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
