import React from 'react';
import GamesTable from '../components/GamesTable'
import TeamOptions from '../components/TeamOptions.js'

function Games() {
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
                    <GamesTable />
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
        </article>
        
    );
};

export default Games;