import React from 'react';
import GamesTable from '../components/GamesTable'
import TeamOptions from '../components/TeamOptions.js'
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'

function Games() {
    const history = useHistory();
    const [games, setGames] = useState([]);
    const [game, setGame] = useState({});
    const [teams, setTeams] = useState([]);
    const [date, setDate] = useState('');
    const [homeTeam, setHomeTeam] = useState(0);
    const [awayTeam, setAwayTeam] = useState(0);
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [deleted, setDeleted] = useState(0);

    const onDelete = async game_id => {
        const response = await fetch(`/server/GetGames/${game_id}`, { method: 'DELETE'});
        if (response.status === 204) {
            setDeleted(deleted+1);
            
        } else {
            console.error(`Failed to delete exercise with game_id = ${game_id}, status code = ${response.status}`);
        }
    };

    const addGame = async (e) => {
        e.preventDefault()
        const newGame = {date, homeTeam, awayTeam, homeScore, awayScore}
        console.log(newGame)
        const response = await fetch("/server/addGame", {
            method: 'POST',
            body: JSON.stringify(newGame),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully added the game");
        } else {
            alert(`Failed to add game, status code = ${response.status}`);
        }
        history.push("/games")
    }

    const editGame = async (e) => {
        console.log(game)
        e.preventDefault()
        const response = await fetch(`/server/UpdateGame/${game.game_id}`, {
            method: 'PUT',
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully edited the game");
        } else {
            alert(`Failed to edit game, status code = ${response.status}`);
        }
    }

    const reset = () => {
        setDate('');
        setAwayTeam('');
        setHomeTeam('');
        setAwayScore('');
        setHomeScore('');
    }

    const resetEdit = () => {
        setGame({})
    }

    const loadGames = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetGames');
        console.log("got response")
        const games = await response.json();
        console.log("getting results")
        setGames(games);
    };

    const loadTeams = async () => {
        const response = await fetch('/server/GetTeams');
        const teams = await response.json();
        setTeams(teams)
    }

    useEffect(() => {
        loadGames();
        loadTeams();
    }, [deleted]);

    return (
        <article>
            <h2>Games</h2>
            <p>Below is the list of games in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Home Team Score</th>
                        <th>Away Team Score</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <GamesTable games={games} onDelete={onDelete} setGame={setGame} />
                </tbody>
            </table>
            <form id="addGames">
                <legend><strong>Add Game</strong></legend>
                <fieldset className="fields">
                    <label> Date </label> <input 
                        type="text" 
                        name="date" 
                        value={date} 
                        onChange={e => setDate(e.target.value)} />
                    <label> Home Team </label> <select name="home_team_id" onChange={e => setHomeTeam(parseInt(e.target.value))}>
                        <TeamOptions teams={teams} setHomeTeam={setHomeTeam} />
                    </select>
                    <label> Away Team </label> <select name="home_team_id" onChange={e => setAwayTeam(parseInt(e.target.value))}>
                        <TeamOptions teams={teams} setAwayTeam={setAwayTeam} />
                    </select>
                    <label> Home Team Score </label> <input 
                        type="number" 
                        name="home_team_score"
                        value={homeScore}
                        onChange={e => setHomeScore(parseInt(e.target.value))} />
                    <label> Away Team Score </label> <input 
                        type="number" 
                        name="away_team_score"
                        value={awayScore}
                        onChange={e => setAwayScore(parseInt(e.target.value))} />
                </fieldset>
                <input className="btn" type="submit" id="addGames" value="Add a Game" onClick={e => addGame(e)}></input>
                <input className="btn" type="button" value="cancel" onClick={reset}></input>
            </form>
            <form id="editGames">
                <legend><strong>Edit Game (use the edit icon next to the Game you would like to edit)</strong></legend>
                <fieldset className="fields">
                    <label> Date </label> <input 
                        type="text" 
                        name="date"
                        value={game.date}
                        onChange={e => setGame(game => ({...game, date: e.target.value}))} />
                    <label> Home Team </label> <select name="home_team_id" value={game.home_id} onChange={e => setGame(game => ({...game, home_id: parseInt(e.target.value)}))}>
                        <TeamOptions teams={teams} setHomeTeam={setHomeTeam}/>
                    </select>
                    <label> Away Team </label> <select name="away_team_id" value={game.away_id} onChange={e => setGame(game => ({...game, away_id: parseInt(e.target.value)}))}>
                        <TeamOptions teams={teams} setAwayTeam={setAwayTeam}/>
                    </select>
                    <label> Home Team Score </label> <input 
                        type="number" 
                        name="home_team_score"
                        value={game.home_team_score}
                        onChange={e => setGame(game => ({...game, home_team_score: parseInt(e.target.value)}))} />
                    <label> Away Team Score </label> <input 
                        type="number" 
                        name="away_team_score" 
                        value={game.away_team_score}
                        onChange={e => setGame(game => ({...game, away_team_score: parseInt(e.target.value)}))} />
                </fieldset>
                <input className="btn" type="submit" id="editGames" value="Edit a Game" onClick={e => editGame(e)}></input>
                <input className="btn" type="button" value="cancel" onClick={resetEdit}></input>
            </form>
        </article>
        
    );
};

export default Games;