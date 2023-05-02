import React, { useState } from "react";
import logo from "../logo.jpeg";
import { Link } from "react-router-dom";
import { AiFillPhone, AiTwotoneHome } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";

import { MdProductionQuantityLimits } from "react-icons/md";
const Navigare = () => {
  const [downMenu, setDownMenu] = useState(false);
  return (
    <div className="navigationBar">
      <div className="logoNavDiv">
        <img src={logo} className="logoNav" />
      </div>
      <button onClick={() => setDownMenu(!downMenu)} className="MenuSmall">
        Meniu
      </button>
      <div className={`ButtonsNavDiv ${downMenu ? "extendMenu" : ""}`}>
        <Link className="LinkTag" onClick={() => setDownMenu(false)} to="/">
          <AiTwotoneHome to={`${process.env.PUBLIC_URL}/`} />
          Acasă
        </Link>
        <Link
          className="LinkTag"
          onClick={() => setDownMenu(false)}
          to={`${process.env.PUBLIC_URL}/produse`}
        >
          <MdProductionQuantityLimits /> Produse
        </Link>
        <Link
          className="LinkTag"
          onClick={() => setDownMenu(false)}
          to={`${process.env.PUBLIC_URL}/contact`}
        >
          <AiFillPhone /> Contact
        </Link>
        <Link
          className="LinkTag"
          onClick={() => setDownMenu(false)}
          to={`${process.env.PUBLIC_URL}/lista`}
        >
          <BsCardList /> Lista
        </Link>
      </div>
    </div>
  );
};

export default Navigare;
