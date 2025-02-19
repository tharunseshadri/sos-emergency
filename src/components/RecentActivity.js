import React from 'react';
import './Dashboard.css';

function RecentActivity() {
  const activities = [
    {
      id: 1,
      icon: '📝',
      text: 'Profile information updated',
      time: '2 hours ago'
    },
    {
      id: 2,
      icon: '🔔',
      text: 'Emergency alert test completed',
      time: 'Yesterday'
    },
    {
      id: 3,
      icon: '✅',
      text: 'Phone number verified',
      time: '3 days ago'
    }
  ];

  return (
    <div className="dashboard-section full-page">
      <h2>Recent Activity</h2>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <span className="activity-icon">{activity.icon}</span>
            <div className="activity-content">
              <p className="activity-text">{activity.text}</p>
              <p className="activity-time">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity; 