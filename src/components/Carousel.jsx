import { useEffect, useState } from "react";
import { carouselImages as images } from "../assets/data";
import "../App.css";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(()=>{
    setInterval(() => {
        nextSlide()
    }, 5000);
  },[])

  return (
    <div className="relative flex mx-10 h-[70%]">
      <img src={leftArrow} alt="prev" className="h-20 cursor-pointer opacity-50 hover:opacity-100 mt-12" onClick={prevSlide} />
      <img
        src={images[currentIndex]}
        alt="carousel-img"
        className="w-[80%] mx-auto h-[700px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      />
      <img src={rightArrow} alt="next" className="h-20 cursor-pointer opacity-50 hover:opacity-100 mt-12" onClick={nextSlide} />
    </div>
  );
};

export default Carousel;
