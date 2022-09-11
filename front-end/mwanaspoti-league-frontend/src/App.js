import  React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home";
import TeamsContainer from "./components/TeamsContainer";
import NewTeamForm from "./components/NewTeamForm";

function App() {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/teams')
    .then(r => r.json())
    .then(data => setTeams(data))
  }, [])

  const handleAddTeam = (addTeam) => {
    fetch('http://localhost:9292/teams',{
      method:'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(addTeam)
    })
    .then((r) => r.json())
    .then(newTeamFromBackend =>{
      const updatedTeams = [newTeamFromBackend, ...teams]
      setTeams(updatedTeams)
      
    })
  }
  
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path='/teams' element = {<TeamsContainer teams={teams} setTeams={setTeams} />} />
            <Route exact path='/teams/newteam' element = {<NewTeamForm handleAddTeam={handleAddTeam}/>} />
          </Routes>
        </Router>
    </div>    
  );
}

export default App;
