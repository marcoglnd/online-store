import React, { useContext } from "react";
import Context from "../context/Context";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";

function Header() {
  const { cartItens } = useContext(Context);
  return (
    <header className="header">
      <div className="logo-div">
        <img src={logo} alt="Logo" />
        <span>MCX</span>
      </div>
      <div className="shopping-cart">
        {cartItens > 0 && (
          <div className="cart-itens">
            <span>{cartItens}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
