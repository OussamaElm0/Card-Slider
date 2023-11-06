import React from 'react'
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function Content({content}){
    return (
        <div className='content'>
            <h1 className='text-light'>{content}</h1>
        </div>
    )
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
          {contentArr.map(slideContent => {
            return (
              <SwiperSlide>
                <Content content={slideContent} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
}