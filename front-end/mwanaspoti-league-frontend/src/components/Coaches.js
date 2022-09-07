import React from "react";
import { Link } from 'react-router-dom';

function Coaches( { coach }) {
    const [id, name] = coach

    return(
        <div>
            <li className = "coach">
                <h3>{name}</h3>
                <Link to={`/coachess/${id}`}>
                <ul>{coach}</ul>
                </Link>
            </li>
        </div>
    )
}

export default Coaches;