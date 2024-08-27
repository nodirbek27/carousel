import React from "react";
import "./style.css";
import rasm1 from "../image/img1.png";
import rasm2 from "../image/img2.jpg";
import rasm3 from "../image/img3.jpg";
import rasm4 from "../image/img4.jpg";
import rasm5 from "../image/img5.jpg";

const App = () => {
  let items = document.querySelectorAll(".slider .list .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let thumbnails = document.querySelectorAll(".thumbnail .item");

  // config param
  let countItem = items.length;
  let itemActive = 0;
  // event next click
  next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
      itemActive = 0;
    }
    showSlider();
  };
  //event prev click
  prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
      itemActive = countItem - 1;
    }
    showSlider();
  };
  // auto run slider
  let refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
  function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector(".slider .list .item.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    // active new item
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
      next.click();
    }, 10000);
  }

  // click thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      itemActive = index;
      showSlider();
    });
  });

  return (
    <div>
      {/* <!-- header --> */}
      <header>
        <div className="logo">Lundev</div>
        <ul className="menu">
          <li>Home</li>
          <li>Blog</li>
          <li>Info</li>
        </ul>
        <div className="search">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
      </header>

      {/* <!-- slider --> */}

      <div className="slider">
        {/* <!-- list Items --> */}
        <div className="list">
          <div className="item active">
            <img src={rasm1} alt="carousel rasmi" />
            <div className="content">
              <p>design</p>
              <h2>Slider 01</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={rasm2} alt="carousel rasmi" />
            <div className="content">
              <p>design</p>
              <h2>Slider 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={rasm3} alt="carousel rasmi" />
            <div className="content">
              <p>design</p>
              <h2>Slider 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={rasm4} alt="carousel rasmi" />
            <div className="content">
              <p>design</p>
              <h2>Slider 04</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
          <div className="item">
            <img src={rasm5} alt="carousel rasmi" />
            <div className="content">
              <p>design</p>
              <h2>Slider 05</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
                neque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum, ex.
              </p>
            </div>
          </div>
        </div>
        {/* button arrows  */}
        <div className="arrows">
          <button id="prev">(</button>
          <button id="next">)</button>
        </div>
        {/* <!-- thumbnail --> */}
        <div className="thumbnail">
          <div className="item active">
            <img src={rasm1} alt="carousel rasmi" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src={rasm2} alt="carousel rasmi" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src={rasm3} alt="carousel rasmi" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src={rasm4} alt="carousel rasmi" />
            <div className="content">Name Slider</div>
          </div>
          <div className="item">
            <img src={rasm5} alt="carousel rasmi" />
            <div className="content">Name Slider</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
