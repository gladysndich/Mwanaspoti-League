import React from "react";
import Player from "./Player";
import Header from "./Header";

function PlayersContainer({players}){
    const renderPlayers = () => {
        return players.map(player => {
            return <Player key={player.id} player={player} />
        })
    }

    return(
        <div>
            <Header />
            <ul>{renderPlayers()}</ul>
        </div>
    )
}

export default PlayersContainer;