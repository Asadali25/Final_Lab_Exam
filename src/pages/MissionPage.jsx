import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMissions, joinMission } from '../store/missionSlice';
import axios from 'axios';

const MissionPage = () => {
  const dispatch = useDispatch();
  const missions = useSelector(state => state.missions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/missions');
        dispatch(setMissions(response.data));
      } catch (error) {
        console.error('Error fetching missions:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleJoinMission = missionId => {
    dispatch(joinMission({ missionId }));
  };

  return (
    <div>
      <h2>Mission Page</h2>
      {missions.map(mission => (
        <div key={mission.mission_id}>
          <h3>{mission.mission_name}</h3>
          <p>{mission.description}</p>
          <button onClick={() => handleJoinMission(mission.mission_id)}>
            {mission.reserved ? 'Leave Mission' : 'Join Mission'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MissionPage;
