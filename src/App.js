import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RocketPage from './pages/RocketPage';
import MissionPage from './pages/MissionPage';
import ProfilePage from './pages/ProfilePage';

function Home() {
  return (
    <div>
      <h2>Welcome to SpaceX App</h2>
      <p>Explore rockets, missions, and your profile.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rockets">Rockets</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>


      <Switch>
      <Route path="/" element={<Home />} />
        <Route path="/rockets" component={RocketPage} />
        <Route path="/missions" component={MissionPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
