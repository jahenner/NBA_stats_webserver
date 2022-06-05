import React from 'react';
import PlayerStatsTable from '../components/PlayerStatsTable';
import PlayerOptions from '../components/PlayerOptions';
import GameOptions from '../components/GameOptions';
import { useState, useEffect } from 'react';

function PlayerStats() {
    const [stats, setStats] = useState([]);
    const [stat, setStat] = useState({})
    const [players, setPlayers] = useState([])
    const [games, setGames] = useState([])
    const [player_id, setPlayer_id] = useState(0)
    const [game_id, setGame_id] = useState(0)
    const [rebounds, setRebounds] = useState(0)
    const [blocks, setBlocks] = useState(0)
    const [steals, setSteals] = useState(0)
    const [turnovers, setTurnovers] = useState(0)
    const [minutes_played, setMinutes] = useState(0)
    const [started_game, setStarted] = useState(0)
    const [freethrows_attempt, setFree_at] = useState(0)
    const [freethrows_made, setFree_made] = useState(0)
    const [field_goals_attempt, setFGA] = useState(0)
    const [field_goals_made, setFGM] = useState(0)
    const [three_points_attempt, set3PA] = useState(0)
    const [three_points_made, set3PM] = useState(0)
    const [assists, setAssists] = useState(0)
    const [fouls, setFouls] = useState(0)
    const [editted, setEditted] = useState(0)

    const onDelete = async player => {
        const game_id = player.game_id
        console.log(game_id, stat)
        const response = await fetch(`/server/GetStats/${player.player_id}_${game_id}`, { method: 'DELETE', body: JSON.stringify({game_id})});
        if (response.status === 204) {
            setEditted(editted+1);
            
        } else {
            console.error(`Failed to delete player stats with player_id = ${player.player_id} and game_id = ${game_id}, status code = ${response.status}`);
        }
    };

    const addStat = async (e) => {
        e.preventDefault()
        const newStat = {player_id, game_id, rebounds, blocks, steals, turnovers, minutes_played, started_game, freethrows_attempt, freethrows_made, field_goals_attempt, field_goals_made, three_points_attempt, three_points_made, assists, fouls}
        console.log(newStat)
        const response = await fetch("/server/addStat", {
            method: 'POST',
            body: JSON.stringify(newStat),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully added the stat");
            setEditted(editted+1);
            reset()
        } else {
            alert(`Failed to add stat, status code = ${response.status}`);
        }
    };

    const editStat = async (e) => {
        console.log(stat)
        e.preventDefault()
        const response = await fetch(`/server/UpdateStat/${stat.player_id}&${stat.game_id}`, {
            method: 'PUT',
            body: JSON.stringify(stat),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully edited the stat");
            setEditted(editted + 1)
            resetEdit();
        } else {
            alert(`Failed to edit stat, status code = ${response.status}`);
        }
    }

    const loadStats = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetStats');
        console.log("got response")
        const stats = await response.json();
        console.log("getting results")
        setStats(stats);
        console.log(stats)
    };

    const loadPlayers = async () => {
        const response = await fetch('/server/getPlayers');
        const players = await response.json();
        setPlayers(players)
    }

    const loadGames = async () => {
        const response = await fetch('/server/getGames');
        const games = await response.json();
        setGames(games)
    }

    const reset = () => {
        setPlayer_id(0)
        setGame_id(0)
        setRebounds(0)
        setBlocks(0)
        setSteals(0)
        setTurnovers(0)
        setMinutes(0)
        setStarted(0)
        setFree_at(0)
        setFree_made(0)
        setFGA(0)
        setFGM(0)
        set3PA(0)
        set3PM(0)
        setAssists(0)
        setFouls(0)
        setEditted(0)

    }

    const resetEdit = () => {
        setStat({})
    }

    useEffect(() => {
        loadStats();
        loadPlayers();
        loadGames();
    }, [editted]);

    return (
        <article>
            <h2>Player Stats</h2>
            <p>Below is the list of players in the NBA with their stats per game</p>
            <table id="PlayerStatTable">
                <thead>
                    <tr>
                        <th>Player Name</th>
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
                    <PlayerStatsTable stats={stats} onDelete={onDelete} setStat={setStat} />
                </tbody>
            </table>
            <form id="addPlayerStats">
                <legend><strong>Add Player Stats</strong></legend>
                <fieldset class="fields">
                    <label> Player </label> <select name="player_id" onChange={e => setPlayer_id(parseInt(e.target.value))} >
                        <PlayerOptions players={players} />
                    </select>
                    <label> Game </label> <select name="game_id" onChange={e => setGame_id(parseInt(e.target.value))} >
                        <GameOptions games={games}/>
                    </select>
                    <label> Rebounds </label> <input type="number" name="rebounds" value={rebounds} onChange={e => setRebounds(parseInt(e.target.value))} /><br></br>
                    <label> Blocks </label> <input type="number" name="blocks" value={blocks} onChange={e => setBlocks(parseInt(e.target.value))} />
                    <label> Steals </label> <input type="number" name="steals" value={steals} onChange={e => setSteals(parseInt(e.target.value))} />
                    <label> Turnovers </label> <input type="number" name="turnovers" value={turnovers} onChange={e => setTurnovers(parseInt(e.target.value))} /><br></br>
                    <label> Minutes Played </label> <input type="number" name="minutes_played" value={minutes_played} onChange={e => setMinutes(parseInt(e.target.value))} />
                    <label> Started Game </label> <select name="started_game" value={started_game} onChange={e => setStarted(parseInt(e.target.value))} >
                        <option value="">&nbsp;</option>
                        <option value="0">False</option>
                        <option value="1">True</option>
                        </select><br></br>
                    <label> Freethrow Attemps </label> <input type="number" name="freethrow_attempts" value={freethrows_attempt} onChange={e => setFree_at(parseInt(e.target.value))} />
                    <label> Freethrows Made </label> <input type="number" name="freethrows_made" value={freethrows_made} onChange={e => setFree_made(parseInt(e.target.value))} /><br></br>
                    <label> Field Goal Attemps </label> <input type="number" name="field_goal_attemps" value={field_goals_attempt} onChange={e => setFGA(parseInt(e.target.value))} />
                    <label> Field Goals Made </label> <input type="number" name="field_goals_made" value={field_goals_made} onChange={e => setFGM(parseInt(e.target.value))} /><br></br>
                    <label> 3 Point Attemps </label> <input type="number" name="3_point_attempts" value={three_points_attempt} onChange={e => set3PA(parseInt(e.target.value))} />
                    <label> 3 Points Made </label> <input type="number" name="3_points_made" value={three_points_made} onChange={e => set3PM(parseInt(e.target.value))} /><br></br>
                    <label> Assists </label> <input type="number" name="assists" value={assists} onChange={e => setAssists(parseInt(e.target.value))} />
                    <label> Fouls </label> <input type="number" name="fouls" value={fouls} onChange={e => setFouls(parseInt(e.target.value))} />
                </fieldset>
                <input class="btn" type="submit" id="addPlayerStats" value="Add Player Stats" onClick={e => addStat(e)}></input>
                <input class="btn" type="button" value="cancel" onClick={reset}></input>
            </form>
            <form id="editPlayerStats">
                <legend><strong>Edit Player Stats (use the edit icon next to the Player Stats you would like to edit)</strong></legend>
                <fieldset class="fields">
                    <label> Player </label> <select name="player_id" value={stat.player_id} onChange={e => setStat(stat => ({...stat, player_id: parseInt(e.target.value)}))}>
                        <PlayerOptions players={players} />
                    </select>
                    <label> Game </label> <select name="game_id" value={stat.game_id} onChange={e => setStat(stat => ({...stat, game_id: parseInt(e.target.value)}))}>
                        <GameOptions games={games} />
                    </select>
                    <label> Rebounds </label> <input type="text" name="rebounds" value={stat.rebounds} onChange={e => setStat(stat => ({...stat, rebounds: parseInt(e.target.value)}))}/><br></br>
                    <label> Blocks </label> <input type="text" name="blocks" value={stat.blocks} onChange={e => setStat(stat => ({...stat, blocks: parseInt(e.target.value)}))}/>
                    <label> Steals </label> <input type="number" name="steals" value={stat.steals} onChange={e => setStat(stat => ({...stat, steals: parseInt(e.target.value)}))} />
                    <label> Turnovers </label> <input type="number" name="turnovers" value={stat.turnovers} onChange={e => setStat(stat => ({...stat, turnovers: parseInt(e.target.value)}))} /><br></br>
                    <label> Minutes Played </label> <input type="number" name="minutes_played" value={stat.minutes_played} onChange={e => setStat(stat => ({...stat, minutes_played: parseInt(e.target.value)}))} />
                    <label> Started Game </label> <select name="started_game" value={stat.started_game} onChange={e => setStat(stat => ({...stat, started_game: parseInt(e.target.value)}))} >
                        <option value="">&nbsp;</option>
                        <option value="0">False</option>
                        <option value="1">True</option>
                        </select><br></br>
                    <label> Freethrow Attemps </label> <input type="number" name="freethrow_attempts" value={stat.freethrows_attempt} onChange={e => setStat(stat => ({...stat, freethrows_attempt: parseInt(e.target.value)}))} />
                    <label> Freethrows Made </label> <input type="number" name="freethrows_made" value={stat.freethrows_made} onChange={e => setStat(stat => ({...stat, freethrows_made: parseInt(e.target.value)}))}/><br></br>
                    <label> Field Goal Attemps </label> <input type="number" name="field_goal_attemps" value={stat.field_goals_attempt} onChange={e => setStat(stat => ({...stat, field_goals_attempt: parseInt(e.target.value)}))} />
                    <label> Field Goals Made </label> <input type="number" name="field_goals_made" value={stat.field_goals_made} onChange={e => setStat(stat => ({...stat, field_goals_made: parseInt(e.target.value)}))}/><br></br>
                    <label> 3 Point Attemps </label> <input type="number" name="3_point_attempts" value={stat.three_points_attempt} onChange={e => setStat(stat => ({...stat, three_points_attempt: parseInt(e.target.value)}))} />
                    <label> 3 Points Made </label> <input type="number" name="3_points_made" value={stat.three_points_made} onChange={e => setStat(stat => ({...stat, three_points_made: parseInt(e.target.value)}))} /><br></br>
                    <label> Assists </label> <input type="number" name="assists" value={stat.assists} onChange={e => setStat(stat => ({...stat, assists: parseInt(e.target.value)}))} />
                    <label> Fouls </label> <input type="number" name="fouls" value={stat.fouls} onChange={e => setStat(stat => ({...stat, fouls: parseInt(e.target.value)}))} />
                </fieldset>
                <input class="btn" type="submit" id="editPlayerStats" value="Edit Player Stats" onClick={e => editStat(e)} ></input>
                <input class="btn" type="button" value="cancel" onClick={resetEdit} ></input>
            </form>
        </article>
        
    );
};

export default PlayerStats;