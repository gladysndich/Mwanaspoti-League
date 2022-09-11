import React from "react";


function Teams( { team }) {

    const { name} = team

    return(
        <div>
            <h3>{name}</h3>        
        </div>
    )
}

export default Teams;