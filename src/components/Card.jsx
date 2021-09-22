import Tag from "./Tag";
import React, { useState, useEffect, useContext } from "react";
import Context from "../context/Context";
import heart from "../assets/images/heart.png";
import heartFilled from "../assets/images/heartFilled.png";

function Card({ roupa, show, setShowBuyBtn, index }) {
  const [divHeight, setDivHeight] = useState("400px");
  const [favorite, setFavorite] = useState(false);
  const { cartItens, setCartItens } = useContext(Context);
  const { tag, img, desc, preco, parc } = roupa;
  const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  };

  const divStyle = {
    height: divHeight,
  };

  function handleDivHeight() {
    setShowBuyBtn(index);
  }

  useEffect(() => {
    show ? setDivHeight("450px") : setDivHeight("400px");
  }, [show]);

  return (
    <div className="card" onClick={handleDivHeight} style={divStyle}>
      <div className="card-img" style={imgStyle}>
        <div className="card-tags">
          <Tag tag={tag} />
          <button
            className="heart"
            style={{ border: "none", background: "white", cursor: "pointer" }}
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? (
              <img src={heartFilled} alt="favoritado" />
            ) : (
              <img src={heart} alt="desfavoritado" />
            )}
          </button>
        </div>
      </div>
      <span className="description">{desc}</span>
      <div className="price-details">
        <span className="price">{preco}</span>
        <span className="description">{parc}</span>
      </div>
      {show && (
        <div className="buy-btn" onClick={() => setCartItens(cartItens + 1)}>
          <span>Comprar</span>
        </div>
      )}
    </div>
  );
}

export default Card;
