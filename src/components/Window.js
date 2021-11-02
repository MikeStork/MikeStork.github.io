import React from "react";
import "./Window.css";
import { FaFacebookMessenger } from 'react-icons/fa';
import {FaPhone} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
const Window = () => {
  return (
    <div className="contain">
      <div className="windowoutline">
        <div className="window">
            <header>Skontaktuj się ze mną</header>
            <div className="l"><FaPhone></FaPhone></div>
            <div><a href="tel:+48669093136">+48 669 093 136</a></div>
            <div className="l"><FaEnvelope></FaEnvelope></div>
            <div><a href="mailto:bocimaister@gmail.com">bocimaister@gmail.com</a></div>
            <div className="l"><FaFacebookMessenger></FaFacebookMessenger></div>
            <div><a href="https://m.me/MikhaelStork">m.me/MikhaelStork</a></div>
        </div>
      </div>
    </div>
  );
};

export default Window;
