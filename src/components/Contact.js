// src/components/Contact.js
import React from "react";
import "./Makanan.css";

const Contact = () => {
  return (
    <div>
      <header>
        <h1
          style={{ fontWeight: "bold", textAlign: "center", fontSize: "36px" }}
        >
          REVIEW
        </h1>
      </header>
    <div className="flex items-center justify-center">
      
      <div className="bg-red-700 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="https://cdn.discordapp.com/attachments/1125426619230732308/1126144544296140880/Snapinsta.app_308000733_1133744150892544_3270023260099902961_n_1080.jpg" alt="product designer" />
        <h1 className="text-lg text-white font-bold "> Nomouth Gun</h1>
        <h3 className="text-m text-white ">Ceo N-Corp</h3>
        <p className="text-s text-white mt-4">Warteg T-34/85 memiliki konsep warteg yang sangat unik dan beda dari warteg lainnya, yang dimana masih dengan konsep yang tradisional dan sangat manual</p>
      </div>
      <div className="bg-red-700 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto " src="https://cdn.discordapp.com/attachments/1125426619230732308/1126147542468546581/211087835_589596702048464_2471471540522376876_n.jpg" alt="product designer" />
        <h1 className="text-lg text-white font-bold ">Amicia De Rune</h1>
        <h3 className="text-m text-white ">Content Creator</h3>
        <p className="text-s text-white mt-4">Warteg T-34/85 adalah warteg yang sangat mengikuti perkembangan digital, di warteg ini kita bisa pesan makanan melalui web sehingga lebih praktis</p>
      </div>
      <div className="bg-red-700 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20">
        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto " src="https://cdn.discordapp.com/attachments/1125426619230732308/1126148204707188746/219287640_604856087189192_6635228309298864812_n.jpg" alt="product designer" />
        <h1 className="text-lg text-white font-bold ">Hugo De Rune</h1>
        <h3 className="text-m text-white ">Mahasiswa</h3>
        <p className="text-s text-white mt-4">Walaupun Warteg T-34/85 adalah warteg yang memiliki konsep yang modern, tapi harga makanan di warteg ini masih sangat murah pas di kantong Mahasiswa</p>
      </div>
      
    </div>
    </div>
    

    
  );
};

export default Contact;

