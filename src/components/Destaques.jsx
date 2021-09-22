import React, { useState } from "react";
import Card from "./Card";
import { data } from "../data/data";
import "../styles/Destaques.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Destaques() {
  const [showBuyBtn, setShowBuyBtn] = useState(null);

  const settings = {
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 4,
  };

  return (
    <section className="destaques">
      <h2>Destaques</h2>
      <div className="carousel">
        <Slider {...settings}>
          {data.map((roupa, index) => (
            <Card
              roupa={roupa}
              key={index}
              index={index}
              setShowBuyBtn={() => setShowBuyBtn(index)}
              show={showBuyBtn === index}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Destaques;
