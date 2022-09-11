import React, { useState } from "react";
import { Link } from "react-router-dom";

function NewTeamForm({handleAddTeam}) {

    const [formData , setFormData ] = useState({
        team_name: '',
        coach_name: '',
        player_1: '',
        player_2: '',
        player_3: '',
        player_4: '',
        player_5: ''
    })

    const handleSubmit = (e) => {
        const newTeam = {...formData}
        e.preventDefault()
        handleAddTeam(newTeam)
        reset()
    }

    const reset = () => {
        setFormData({
            team_name: '',
            coach_name: '',
            player_1: '',
            player_2: '',
            player_3: '',
            player_4: '',
            player_5: ''
        })
    }
    return(
        <div className="newTeamForm">
        <h1>New Team</h1>
        <form class="row g-3" onSubmit={handleSubmit}>
            <div class="col-md-6">
                <label for="new-team" class="form-label">Team Name</label>
                    <input type="team-name" class="form-control" id="new-team" />
            </div>
            <div class="col-md-6">
                <label for="new-coach" class="form-label">Coach</label>
                    <input type="coach-name" class="form-control" id="new-coach" />
            </div>
            <div class="col-12">
                <label for="inputPlayers" class="form-label">Player1</label>
                    <input type="text" class="form-control" id="inputPlayers" placeholder="Player1" />
            </div>
            <div class="col-12">
                <label for="inputPlayers" class="form-label">Player2</label>
                    <input type="text" class="form-control" id="inputPlayers" placeholder="Player2" />
            </div>
            <div class="col-12">
                <label for="inputPlayers" class="form-label">Player3</label>
                    <input type="text" class="form-control" id="inputPlayers" placeholder="Player3" />
            </div>
            <div class="col-12">
                <label for="inputPlayers" class="form-label">Player4</label>
                    <input type="text" class="form-control" id="inputPlayers" placeholder="Player4" />
            </div>
            <div class="col-12">
                <label for="inputPlayers" class="form-label">Player5</label>
                    <input type="text" class="form-control" id="inputPlayers" placeholder="Player5" />
            </div>
            <div class="col-12">
                <Link to="/teams">
                    <button type="submit" class="btn btn-primary" className="addTeam" onClick={handleAddTeam()}>Add Team</button>
                </Link>
            </div>
        </form>
        </div>
    );
}

export default NewTeamForm;