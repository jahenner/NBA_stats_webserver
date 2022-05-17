import React from 'react';
import GamesTable from '../components/GamesTable'
import TeamOptions from '../components/TeamOptions.js'
import { useState, useEffect } from 'react';

function Games() {

    const [games, setGames] = useState([]);

    const onDelete = async game_id => {
        const response = await fetch(`/games/${game_id}`, { method: 'DELETE'});
        if (response.status === 204) {
            const newGame = games.filter(e => e.game_id !== game_id);
            setGames(newGame);
        } else {
            console.error(`Failed to delete exercise with game_id = ${game_id}, status code = ${response.status}`);
        }
    };

    const loadGames = async () => {
        console.log("starting fetch");
        const response = await fetch('/GetGames');
        console.log("got response")
        const games = await response.json();
        console.log("getting results")
        setGames(games);
    };

    useEffect(() => {
        loadGames();
    }, []);

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
                    <GamesTable games={games} onDelete={onDelete} />
                </tbody>
            </table>
            <form id="addGames">
                <legend><strong>Add Game</strong></legend>
                <fieldset class="fields">
                    <label> Date </label> <input type="text" name="date" />
                    <label> Home Team </label> <select name="home_team_id">
                        <TeamOptions />
                    </select>
                    <label> Away Team </label> <select name="home_team_id">
                        <TeamOptions />
                    </select>
                    <label> Home Team Score </label> <input type="number" name="home_team_score" />
                    <label> Away Team Score </label> <input type="number" name="away_team_score" />
                </fieldset>
                <input class="btn" type="submit" id="addGames" value="Add a Game"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
            <form id="editGames">
                <legend><strong>Edit Game (use the edit icon next to the Game you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> Date </label> <input type="text" name="date" />
                    <label> Home Team </label> <select name="home_team_id">
                        <TeamOptions />
                    </select>
                    <label> Away Team </label> <select name="home_team_id">
                        <TeamOptions />
                    </select>
                    <label> Home Team Score </label> <input type="number" name="home_team_score" />
                    <label> Away Team Score </label> <input type="number" name="away_team_score" />
                </fieldset>
                <input class="btn" type="submit" id="editGames" value="Edit a Game"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default Games;