import { useState } from "react";
import { carouselImages as images } from "../assets/data";
import "../App.css";

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

  return (
    <div className="relative flex mx-10 h-[70%]">
      <button className="h-20" onClick={prevSlide}>
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt="carousel-img"
        className="w-[80%] mx-auto h-[700px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
      />
      <button className="h-20" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
