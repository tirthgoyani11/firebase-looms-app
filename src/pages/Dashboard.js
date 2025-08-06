import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to Febri Flow - Your content management dashboard</p>
      </header>
      
      <div className="dashboard-content">
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Posts</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Published</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Drafts</h3>
            <div className="stat-value">0</div>
          </div>
          <div className="stat-card">
            <h3>Views</h3>
            <div className="stat-value">0</div>
          </div>
        </div>
        
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <p>No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
