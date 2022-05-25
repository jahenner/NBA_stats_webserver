import React from 'react';
import PlayersTable from '../components/PlayersTable';
import CityOptions from '../components/CityOptions';
import { useState, useEffect } from 'react';
import TeamOptions from '../components/TeamOptions';

function Players() {
    const [players, setPlayers] = useState([]);
    const [cities, setCities] = useState([]);
    const [teams, setTeams] = useState([]);
    const [currTeam, setCurrTeam] = useState(0);
    const [player, setPlayer] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [careerPoints, setCareerPoints] = useState(0);
    const [careerSteals, setCareerSteals] = useState(0);
    const [careerBlocks, setCareerBlocks] = useState(0);
    const [careerRebounds, setCareerRebounds] = useState(0);
    const [hometown, setHometown] = useState(0);
    const [editted, setEditted] = useState(0);

    const addPlayer = async (e) => {
        e.preventDefault()
        const newPlayer = {firstName, lastName, age, careerPoints, careerSteals, careerBlocks, careerRebounds, hometown, currTeam}
        console.log(newPlayer)
        const response = await fetch("/server/addPlayer", {
            method: 'POST',
            body: JSON.stringify(newPlayer),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully added the city");
            setEditted(editted+1);
            reset();
        } else {
            alert(`Failed to add city, status code = ${response.status}`);
        }
    }

    const editPlayer = async (e) => {
        console.log(player)
        e.preventDefault()
        const response = await fetch(`/server/UpdatePlayer/${player.player_id}`, {
            method: 'PUT',
            body: JSON.stringify(player),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully edited the city");
            setEditted(editted + 1)
        } else {
            alert(`Failed to edit city, status code = ${response.status}`);
        }
    }


    const loadPlayers = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetPlayers');
        console.log("got response")
        const players = await response.json();
        console.log("getting results")
        setPlayers(players);
    };

    const loadCities = async () => {
        const response = await fetch('/server/GetCities');
        const cities = await response.json();
        setCities(cities)
    }

    const loadTeams = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetTeams');
        console.log("got response")
        const teams = await response.json();
        console.log("getting results")
        setTeams(teams);
    };

    const reset = () => {
        setFirstName('');
        setLastName('');
        setAge(0);
        setCareerPoints(0);
        setCareerSteals(0);
        setCareerBlocks(0);
        setCareerRebounds(0);
        setHometown("");
    }

    const resetEdit = () => {
        setPlayer({})
    }


    useEffect(() => {
        loadPlayers();
        loadCities();
        loadTeams();
    }, [editted]);

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
                    <PlayersTable players={players} setPlayer={setPlayer}/>
                </tbody>
            </table>
            <form id="addPlayers">
                <legend><strong>Add Player</strong></legend>
                <fieldset class="fields">
                    <label> First Name </label> <input type="text" name="first_name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    <label> Last Name </label> <input type="text" name="last_name" value={lastName} onChange={e => setLastName(e.target.value)} />
                    <label> Age </label> <input type="number" name="age" value={age} onChange={e => setAge(parseInt(e.target.value))} />
                    <label> Career Points </label> <input type="number" name="career_points" value={careerPoints} onChange={e => setCareerPoints(parseInt(e.target.value))} />
                    <label> Career Steal </label> <input type="number" name="career_steals" value={careerSteals} onChange={e => setCareerSteals(parseInt(e.target.value))} />
                    <label> Career Blocks </label> <input type="number" name="career_blocks" value={careerBlocks} onChange={e => setCareerBlocks(parseInt(e.target.value))}/>
                    <label> Career Rebounds </label> <input type="number" name="career_rebounds" value={careerRebounds} onChange={e => setCareerRebounds(parseInt(e.target.value))}/>
                    <label> Hometown </label> <select name="city_id" value={hometown} onChange={e => setHometown(parseInt(e.target.value))}>
                        <CityOptions cities={cities} />
                    </select>
                    <label> Current Team </label> <select name="team_id" value={currTeam} onChange={e => setCurrTeam(parseInt(e.target.value))}>
                        <TeamOptions teams={teams}/>
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="addPlayers" value="Add a Player" onClick={e => addPlayer(e)}></input>
                <input class="btn" type="button" value="cancel" onClick={reset}></input>
            </form>
            <form id="editPlayers">
                <legend><strong>Edit Player (use the edit icon next to the Player you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> First Name </label> <input type="text" name="first_name" value={player.first_name} onChange={e => setPlayer(player => ({...player, first_name: e.target.value}))} />
                    <label> Last Name </label> <input type="text" name="last_name" value={player.last_name} onChange={e => setPlayer(player => ({...player, last_name: e.target.value}))} />
                    <label> Age </label> <input type="number" name="age" value={player.age} onChange={e => setPlayer(player => ({...player, age: parseInt(e.target.value)}))} />
                    <label> Career Points </label> <input type="number" name="career_points" value={player.career_points} onChange={e => setPlayer(player => ({...player, career_points: parseInt(e.target.value)}))} />
                    <label> Career Steal </label> <input type="number" name="career_steals" value={player.career_steals} onChange={e => setPlayer(player => ({...player, career_steals: parseInt(e.target.value)}))} />
                    <label> Career Blocks </label> <input type="number" name="career_blocks" value={player.career_blocks} onChange={e => setPlayer(player => ({...player, career_blocks: parseInt(e.target.value)}))}/>
                    <label> Career Rebounds </label> <input type="number" name="career_rebounds" value={player.career_rebounds} onChange={e => setPlayer(player => ({...player, career_rebounds: parseInt(e.target.value)}))}/>
                    <label> Hometown </label> <select name="city_id" value={player.city_id} onChange={e => setPlayer(player => ({...player, city_id: parseInt(e.target.value)}))}>
                        <CityOptions cities={cities} />
                    </select>
                    <label> Current Team </label> <select name="team_id" value={player.team_id} onChange={e => setPlayer(player => ({...player, team_id: parseInt(e.target.value)}))}>
                        <TeamOptions teams={teams} />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="editPlayerss" value="Edit a Player" onClick={e => editPlayer(e)}></input>
                <input class="btn" type="button" value="cancel" onClick={resetEdit}></input>
            </form>
        </article>
        
    );
};

export default Players;