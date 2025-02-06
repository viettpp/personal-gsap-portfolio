"use client";

import { FC } from "react";
import "@fontsource/redacted-script"; // Import Redacted Script font
import "@/styles/Header.css";

const Header: FC = () => {
  return (
    <header className="logo-container">
      <div className="logo">
        <span className="kelsi">V</span>
        <span className="redacted">iet</span>
      </div>
    </header>
  );
};

export default Header;