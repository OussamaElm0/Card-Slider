import React from "react";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import images from "./Data";

function Content(content) {
  const { name, url } = content;

  const handleClick = () => {
    console.log(`${name} was clicked}`);
  };

  return (
    <div className="content card">
      <img src={url} alt={name} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <button className="btn btn-outline-success" onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default function App() {
  const contentArr = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
    "Slide 9",
    "Slide 10",
  ];

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper"
      >
        {images.map((slideContent, index) => {
          const { name, url } = slideContent;

          return (
            <SwiperSlide key={index}>
              <Content url={url} name={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
