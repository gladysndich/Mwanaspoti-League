import React from "react";
import { Link } from 'react-router-dom';

function Teams( { team }) {
    const [id, name, coach] = team

    return(
        <div>
            <li className = "Team">
                <h3>{name}</h3>
                <Link to={`/teams/${id}`}>
                <ul>{coach}</ul>
                </Link>
            </li>
        </div>
    )
}

export default Teams;