import React from 'react';
import TeamsTable from '../components/TeamsTable'
import CityOptions from '../components/CityOptions'

function Teams() {
    const [teams, setTeams] = useState([]);

    const loadTeams = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetTeams');
        console.log("got response")
        const teams = await response.json();
        console.log("getting results")
        setTeams(teams);
    };

    useEffect(() => {
        loadTeams();
    }, []);

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
                    <TeamsTable teams={teams} />
                </tbody>
            </table>
            <form id="addTeams">
                <legend><strong>Add Team</strong></legend>
                <fieldset class="fields">
                    <label> Name </label> <input type="text" name="name" />
                    <label> Mascot </label> <input type="text" name="mascot" />
                    <label> Location </label> <select name="city_id">
                        <CityOptions />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="addTeams" value="Add a Team"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
            <form id="editTeams">
                <legend><strong>Edit Team (use the edit icon next to the Team you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> Name </label> <input type="text" name="name" />
                    <label> Mascot </label> <input type="text" name="mascot" />
                    <label> Location </label> <select name="city_id">
                        <CityOptions />
                    </select>
                </fieldset>
                <input class="btn" type="submit" id="editTeams" value="Edit a Team"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default Teams;