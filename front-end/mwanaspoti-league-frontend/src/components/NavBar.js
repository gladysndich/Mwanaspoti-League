import React from "react";

function NavBar() {
    return(
        <div className="appHeader">
         <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link " aria-current="page" href="/">Home</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="/teams">Teams</a>
      </nav>
        </div>

    );
}

export default NavBar;