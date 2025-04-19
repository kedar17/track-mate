import React from 'react';

const Dashboard = ({ trackingData }) => (
  <div>
    <h2>Tracking Data</h2>
    {trackingData && trackingData.length > 0 ? (
      <ul>
        {trackingData.map(item => (
          <li key={item.id}>
            Event {item.id}: {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    ) : (
      <p>No tracking data available.</p>
    )}
  </div>
);

export default Dashboard;
