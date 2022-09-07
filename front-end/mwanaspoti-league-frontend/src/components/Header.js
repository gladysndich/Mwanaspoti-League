import React from "react";

function Header() {
  return (
    <header className='appHeader'>
        <nav>
            <ul className="navList">
                <li><a class="active" href="/">Home</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/players">Players</a></li>
                <li><a href="/coaches">Coaches</a></li>
            </ul>
        </nav>
    </header>
  );
}


export default Header;