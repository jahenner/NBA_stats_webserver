import React from 'react';
import TeamsTable from '../components/TeamsTable'
import CityOptions from '../components/CityOptions'
import { useState, useEffect } from 'react';

function Teams() {
    const [teams, setTeams] = useState([]);
    const [cities, setCities] = useState([]);
    const [team, setTeam] = useState({});
    const [name, setName] = useState("");
    const [mascot, setMascot] = useState("");
    const [location, setLocation] = useState(0);
    const [editted, setEditted] = useState(0);

    const addTeam = async (e) => {
        e.preventDefault()
        const newTeam = {name, mascot, location}
        console.log(newTeam)
        const response = await fetch("/server/addTeam", {
            method: 'POST',
            body: JSON.stringify(newTeam),
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

    const editTeam = async (e) => {
        console.log(team)
        e.preventDefault()
        const response = await fetch(`/server/UpdateTeam/${team.team_id}`, {
            method: 'PUT',
            body: JSON.stringify(team),
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

    const loadTeams = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetTeams');
        console.log("got response")
        const teams = await response.json();
        console.log("getting results")
        setTeams(teams);
    };

    const loadCities = async () => {
        const response = await fetch('/server/GetCities');
        const cities = await response.json();
        setCities(cities)
    }

    const reset = () => {
        setName('');
        setMascot('');
        setLocation(0);
    }

    const resetEdit = () => {
        setTeam({})
    }

    useEffect(() => {
        loadTeams();
        loadCities();
    }, [editted]);

    return (
        <article>
            <h2>Teams</h2>
            <p>Below is the list of teams in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mascot</th>
                        <th>Location</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamsTable teams={teams} setTeam={setTeam} />
                </tbody>
            </table>
            <form id="addTeams">
                <legend><strong>Add Team</strong></legend>
                <fieldset class="fields">
                    <label> Name </label> <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                    <label> Mascot </label> <input type="text" name="mascot" value={mascot} onChange={e => setMascot(e.target.value)} />
                    <label> Location </label> <select name="city_id" value={location} onChange={e => setLocation(parseInt(e.target.value))} >
                        <CityOptions cities={cities} />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="addTeams" value="Add a Team" onClick={e => addTeam(e)}></input>
                <input class="btn" type="button" value="cancel" onClick={reset}></input>
            </form>
            <form id="editTeams">
                <legend><strong>Edit Team (use the edit icon next to the Team you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> Name </label> <input 
                        type="text" 
                        name="name"
                        value={team.name}
                        onChange={e => setTeam(team => ({...team, name: e.target.value}))} />
                    <label> Mascot </label> <input 
                        type="text" 
                        name="mascot"
                        value={team.mascot}
                        onChange={e => setTeam(team => ({...team, mascot: e.target.value}))} />
                    <label> Location </label> <select name="city_id" value={team.city_id} onChange={e => setTeam(team => ({...team, location: parseInt(e.target.value)}))}>
                        <CityOptions cities={cities} />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="editTeams" value="Edit a Team" onClick={e => editTeam(e)}></input>
                <input class="btn" type="button" value="cancel" onClick={resetEdit}></input>
            </form>
        </article>
        
    );
};

export default Teams;