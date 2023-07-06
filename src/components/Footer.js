import React from "react";

const Footer = () =>{
    return(
      <div>
      <footer className="footer footer-center w-full p-4 bg-red-700 ">
        <div className="text-center">
          <p style={{ color: 'white' }}>
            WARTEG T-34/85 © 2023 -
            <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">Arjuna Dwi Damara Putra</a>
          </p>
          <p style={{ color: 'white' }}>
            <a className="font-semibold" href="mailto:razita.nazla.febriani.tik22@mhsw.pnj.ac.id">Razita Nazla Febriani</a>
          </p>
        </div>
      </footer>
    </div>
    );
};

export default Footer;