import React from "react";
import { Link } from 'react-router-dom';

function Players( { player }) {
    const [id, name] = player

    return(
        <div>
            <li className = "Player">
                <h3>{name}</h3>
                <Link to={`/players/${id}`}>
                <ul>{player}</ul>
                </Link>
            </li>
        </div>
    )
}

export default Players;