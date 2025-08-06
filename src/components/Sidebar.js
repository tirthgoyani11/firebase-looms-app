import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Febri Flow</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a href="/" className="nav-link active">
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/content" className="nav-link">
              <span>Content</span>
            </a>
          </li>
          <li>
            <a href="/analytics" className="nav-link">
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="/settings" className="nav-link">
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
