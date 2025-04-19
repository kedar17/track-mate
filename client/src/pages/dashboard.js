import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard';

const Home = () => {
  const [trackingData, setTrackingData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/tracking')
      .then(response => response.json())
      .then(data => {
        setTrackingData(data.data);
      })
      .catch(error => console.error('Error fetching tracking data:', error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Dashboard trackingData={trackingData} />
    </div>
  );
};

export default Home;
