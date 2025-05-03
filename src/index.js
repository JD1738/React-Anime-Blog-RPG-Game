import React from 'react';
import ReactDOM from 'react-dom/client';
import background from './ReactGifs/CatDance.gif';

function App() {
  return (
    <div
      style={{
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        backgroundImage: `url(${background})`, // Set the background image (GIF)
        backgroundSize: 'cover', // Make the GIF cover the whole screen
        backgroundPosition: 'center', // Center the GIF
        filter: 'brightness(0.5)', // Darken the GIF
      }}
    ></div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
