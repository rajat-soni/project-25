import React, { useState } from 'react';

const ZoomCard = () => {
  const [zoom, setZoom] = useState(1);

  // Function to handle zoom in and zoom out
  const handleZoomIn = () => {
    setZoom(zoom + 0.1); // Increase zoom by 0.1
  };

  const handleZoomOut = () => {
    setZoom(zoom - 0.1); // Decrease zoom by 0.1
  };

  return (
    <div className="card-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        className="card"
        style={{
          width: '300px',
          height: '400px',
          borderRadius: '10px',
          background: '#f0f0f0',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease',  // Smooth transition for zoom
          transform: `scale(${zoom})`,
        }}
      >
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Zoomable Card</h3>
          <p>This card zooms in and out.</p>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleZoomIn} style={{ marginRight: '10px' }}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
    </div>
  );
};

export default ZoomCard;
