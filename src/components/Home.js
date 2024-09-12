import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://discordapp.com/channels/890166217199992853/1125426619230732308/1126858299061575721",
    "https://discordapp.com/channels/890166217199992853/1125426619230732308/1126858299061575721",
    "https://discordapp.com/channels/890166217199992853/1125426619230732308/1126858299061575721",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div>
      <div className="boxmenu">
        <span>WARTEG T-34/85</span>
        <p>"PERUT ANDA KENYANG" "DOMPET KAMI SENANG"</p>
        <Link to="/Menu" className="menu-button">Lihat Menu</Link>
      </div>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={images[currentImageIndex]} alt="Gambar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </div>
  );
};

export default Home;
