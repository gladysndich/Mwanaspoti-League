import React from "react";
import Teams from "./Teams";
import Header from "./Header";

function TeamsContainer({teams}){
    const renderTeams = () => {
        return teams.map(team => {
            return <Teams key={team.id} team={team} />
        })
    }

    return(
        <div>
            <Header />
            <ul>{renderTeams()}</ul>
        </div>
    )
}

export default TeamsContainer;