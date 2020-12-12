import React from 'react';

export const Tab: React.FC = ({ children }) => {
  return (
    <div className="aesthetic-windows-95-tabbed-container">
      <div className="aesthetic-windows-95-tabbed-container-tabs">
        <div
          style={{ borderBottomColor: 'transparent', zIndex: 1 }}
          className="aesthetic-windows-95-tabbed-container-tabs-button is-active"
        >
          <button>Overview</button>
        </div>
        <div className="aesthetic-windows-95-tabbed-container-tabs-button">
          <button>Repositories</button>
        </div>
        <div className="aesthetic-windows-95-tabbed-container-tabs-button">
          <button>Projects</button>
        </div>
        <div className="aesthetic-windows-95-tabbed-container-tabs-button">
          <button>Packages</button>
        </div>
      </div>

      <div style={{ zIndex: 0 }} className="aesthetic-windows-95-container">
        {children}
      </div>
    </div>
  );
};
