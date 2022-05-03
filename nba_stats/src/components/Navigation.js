import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <Link className="App-link" to="/">Home</Link>
            <Link className="App-link" to="/teams">Teams</Link>
            <Link className="App-link" to="/players">Players</Link>
            <Link className="App-link" to="/playerstats">Player Stats</Link>
            <Link className="App-link" to="/games">Games</Link>
            <Link className="App-link" to="/cities">Cities</Link>
        </nav>
    );
};

export default Navigation;