import React from "react";

function NewTeamForm() {
    return(
        <form class="row g-3">
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
                <button type="submit" class="btn btn-primary">Add Team</button>
            </div>
        </form>
    );
}

export default NewTeamForm;