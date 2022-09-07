import React from "react";
import Coaches from "./Coaches";
import Header from "./Header";

function CoachesContainer({coaches}){
    const renderCoaches = () => {
        return coaches.map(coach => {
            return <Coaches key={coach.id} coach={coach} />
        })
    }

    return(
        <div>
            <Header />
            <ul>{renderCoaches()}</ul>
        </div>
    )
}

export default CoachesContainer;