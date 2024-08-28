import React, { useState, useRef, useEffect, useCallback } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import "./style.css";
import rasm1 from "../../assets/image/img1.avif";
import rasm2 from "../../assets/image/img2.avif";
import rasm3 from "../../assets/image/img3.avif";
import rasm4 from "../../assets/image/img4.avif";
import rasm5 from "../../assets/image/img5.avif";

const Carousel = () => {
  const [itemActive, setItemActive] = useState(0);
  const itemsRef = useRef([]);
  const thumbnailsRef = useRef([]);
  const intervalRef = useRef(null);

  const items = [rasm1, rasm2, rasm3, rasm4, rasm5];
  const countItem = items.length;

  const nextSlide = () => {
    setItemActive((prev) => (prev + 1) % countItem);
  };

  const prevSlide = () => {
    setItemActive((prev) => (prev - 1 + countItem) % countItem);
  };

  const showSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 10000);
  }, [nextSlide]);

  useEffect(() => {
    showSlider();
    return () => clearInterval(intervalRef.current);
  }, [showSlider]);

  return (
    <div>
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <img src={item} alt="carousel rasmi" />
              <div className="content">
                <p>design</p>
                <h2>Slider {index + 1}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button onClick={prevSlide}><IoIosArrowDropleft /></button>
          <button onClick={nextSlide}><IoIosArrowDropright /></button>
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${index === itemActive ? "active" : ""}`}
              ref={(el) => (thumbnailsRef.current[index] = el)}
              onClick={() => setItemActive(index)}
            >
              <img src={item} alt="carousel rasmi" />
              <div className="content">Name Slider</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
