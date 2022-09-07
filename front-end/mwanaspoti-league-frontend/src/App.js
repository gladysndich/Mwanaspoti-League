import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PlayersContainer from './components/PlayersContainer';
import TeamsContainer from './components/TeamsContainer';
import CoachesContainer from './components/CoachesContainer';

function App() {
  return (
    <div className="App">
      <Header className="App-Header">
      </Header>
      <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/teams/:id' element = {<TeamsContainer />} />
        <Route path= '/players' element = {<PlayersContainer />} />
        <Route path= '/coaches' element = {<CoachesContainer />} />
      </Routes>
      </Router>
    </div>    
  );
}

export default App;
