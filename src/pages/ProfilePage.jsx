import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const reservedRockets = useSelector(state => state.rockets.filter(rocket => rocket.reserved));
  const reservedMissions = useSelector(state => state.missions.filter(mission => mission.reserved));

  return (
    <div>
      <h2>My Profile</h2>
      <div>
        <h3>Reserved Rockets:</h3>
        <ul>
          {reservedRockets.map(rocket => (
            <li key={rocket.id}>{rocket.rocket_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Reserved Missions:</h3>
        <ul>
          {reservedMissions.map(mission => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
