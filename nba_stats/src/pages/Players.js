import React from 'react';
import PlayersTable from '../components/PlayersTable';
import CityOptions from '../components/CityOptions';
import TeamOptions from '../components/TeamOptions';

function Players() {
    return (
        <article>
            <h2>Players</h2>
            <p>Below is the list of players in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Career Points</th>
                        <th>Career Steals</th>
                        <th>Career Blocks</th>
                        <th>Career Rebounds</th>
                        <th>Hometown</th>
                        <th>Current Team</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <PlayersTable />
                </tbody>
            </table>
            <form id="addPlayers">
                <legend><strong>Add Player</strong></legend>
                <fieldset class="fields">
                    <label> First Name </label> <input type="text" name="first_name" />
                    <label> Last Name </label> <input type="text" name="last_name" />
                    <label> Age </label> <input type="number" name="age" />
                    <label> Career Points </label> <input type="number" name="career_points" />
                    <label> Career Steal </label> <input type="number" name="career_steals" />
                    <label> Career Blocks </label> <input type="number" name="career_blocks" />
                    <label> Career Rebounds </label> <input type="number" name="career_rebounds" />
                    <label> Hometown </label> <select name="city_id">
                        <CityOptions />
                    </select>
                    <label> Current Team </label> <select name="team_id">
                        <TeamOptions />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="addPlayerss" value="Add a Player"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
            <form id="editPlayers">
                <legend><strong>Edit Player (use the edit icon next to the Player you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> First Name </label> <input type="text" name="first_name" />
                    <label> Last Name </label> <input type="text" name="last_name" />
                    <label> Age </label> <input type="number" name="age" />
                    <label> Career Points </label> <input type="number" name="career_points" />
                    <label> Career Steal </label> <input type="number" name="career_steals" />
                    <label> Career Blocks </label> <input type="number" name="career_blocks" />
                    <label> Career Rebounds </label> <input type="number" name="career_rebounds" />
                    <label> Hometown </label> <select name="city_id">
                        <CityOptions />
                    </select>
                    <label> Current Team </label> <select name="team_id">
                        <TeamOptions />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="editPlayerss" value="Edit a Player"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default Players;