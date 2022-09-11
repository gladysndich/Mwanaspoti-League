import React from "react";
import Teams from "./Teams";
import {Link} from 'react-router-dom';



function TeamsContainer({teams}){


    const renderTeams = () => {
        return teams.map(team => {
            return <Teams key={team.id} team={team} />
        })
    }
    
    
    return(
        <div>
            <div className="teamsContainer">
                <br></br>
                <div class="container">
                    {renderTeams()}
                    <Link to="/teams/newteam">
                        <button class="newTeam">New Team</button>
                    </Link>
                </div>
            </div>
            
            
        </div>
    )
}

export default TeamsContainer;