import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRockets, reserveRocket } from '../store/rocketsSlice';
import axios from 'axios';

const RocketPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rockets);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        dispatch(setRockets(response.data));
      } catch (error) {
        console.error('Error fetching rockets:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleReserveRocket = rocketId => {
    dispatch(reserveRocket({ rocketId }));
  };

  return (
    <div>
      <h2>Rocket Page</h2>
      {rockets.map(rocket => (
        <div key={rocket.id}>
          <h3>{rocket.rocket_name}</h3>
          <p>{rocket.description}</p>
          <button onClick={() => handleReserveRocket(rocket.id)}>
            {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default RocketPage;
