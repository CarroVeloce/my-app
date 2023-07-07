import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://cdn.discordapp.com/attachments/1125426619230732308/1126858297513877665/Warteg.webp",
    "https://cdn.discordapp.com/attachments/1125426619230732308/1126858298101084170/large-goodnewsfromindonesia-gnfi-menu-warteg-ac1d395b67ebc01401488e05f890fbd6.jpg",
    "https://cdn.discordapp.com/attachments/1125426619230732308/1126858298528895056/P1000442.JPG",
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
