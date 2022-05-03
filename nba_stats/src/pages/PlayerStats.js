import React from 'react';
import PlayerStatsTable from '../components/PlayerStatsTable';
import PlayerOptions from '../components/PlayerOptions';
import GameOptions from '../components/GameOptions';

function PlayerStats() {
    return (
        <article>
            <h2>Player Stats</h2>
            <p>Below is the list of players in the NBA with their stats per game</p>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date</th>
                        <th>Opposing Team</th>
                        <th>Rebounds</th>
                        <th>Blocks</th>
                        <th>Steals</th>
                        <th>Turnovers</th>
                        <th>Minutes Played</th>
                        <th>Started Game</th>
                        <th>Freethrow Attempts</th>
                        <th>Freethrows Made</th>
                        <th>Field Goal Attempts</th>
                        <th>Field Goals Made</th>
                        <th>3 Point Attempts</th>
                        <th>3 Points Made</th>
                        <th>Assists</th>
                        <th>Fouls</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <PlayerStatsTable />
                </tbody>
            </table>
            <form id="addPlayerStats">
                <legend><strong>Add Player Stats</strong></legend>
                <fieldset class="fields">
                    <label> Player </label> <select name="player_id">
                        <PlayerOptions />
                    </select>
                    <label> Game </label> <select name="game_id">
                        <GameOptions />
                    </select>
                    <label> Rebounds </label> <input type="text" name="rebounds" />
                    <label> Blocks </label> <input type="text" name="blocks" />
                    <label> Steals </label> <input type="number" name="steals" />
                    <label> Turnovers </label> <input type="number" name="turnovers" />
                    <label> Minutes Played </label> <input type="number" name="minutes_played" />
                    <label> Started Game </label> <select name="started_game" >
                        <option value="">&nbsp;</option>
                        <option value="0">False</option>
                        <option value="1">True</option>
                        </select>
                    <label> Freethrow Attemps </label> <input type="number" name="freethrow_attempts" />
                    <label> Freethrows Made </label> <input type="number" name="freethrows_made" />
                    <label> Field Goal Attemps </label> <input type="number" name="field_goal_attemps" />
                    <label> Field Goals Made </label> <input type="number" name="field_goals_made" />
                    <label> 3 Point Attemps </label> <input type="number" name="3_point_attempts" />
                    <label> 3 Points Made </label> <input type="number" name="3_points_made" />
                    <label> Assists </label> <input type="number" name="assists" />
                    <label> Fouls </label> <input type="number" name="fouls" />
                </fieldset>
                <input class="btn" type="submit" id="addPlayerStats" value="Add Player Stats"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
            <form id="editPlayerStats">
                <legend><strong>Edit Player Stats (use the edit icon next to the Player Stats you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> Player </label> <select name="player_id">
                        <PlayerOptions />
                    </select>
                    <label> Game </label> <select name="game_id">
                        <GameOptions />
                    </select>
                    <label> Rebounds </label> <input type="text" name="rebounds" />
                    <label> Blocks </label> <input type="text" name="blocks" />
                    <label> Steals </label> <input type="number" name="steals" />
                    <label> Turnovers </label> <input type="number" name="turnovers" />
                    <label> Minutes Played </label> <input type="number" name="minutes_played" />
                    <label> Started Game </label> <select name="started_game" >
                        <option value="">&nbsp;</option>
                        <option value="0">False</option>
                        <option value="1">True</option>
                        </select>
                    <label> Freethrow Attemps </label> <input type="number" name="freethrow_attempts" />
                    <label> Freethrows Made </label> <input type="number" name="freethrows_made" />
                    <label> Field Goal Attemps </label> <input type="number" name="field_goal_attemps" />
                    <label> Field Goals Made </label> <input type="number" name="field_goals_made" />
                    <label> 3 Point Attemps </label> <input type="number" name="3_point_attempts" />
                    <label> 3 Points Made </label> <input type="number" name="3_points_made" />
                    <label> Assists </label> <input type="number" name="assists" />
                    <label> Fouls </label> <input type="number" name="fouls" />
                </fieldset>
                <input class="btn" type="submit" id="editPlayerStats" value="Edit Player Stats"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default PlayerStats;