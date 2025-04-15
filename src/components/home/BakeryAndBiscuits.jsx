import { useRef, useState } from "react";
import "../../styles/DairyBreadAndEggs.css";
import { timerIcon } from "../../data/index";
import { BakeryAndBiscuitsData } from "../../data/index";  // Note the curly braces


const BakeryAndBiscuits = () => {
  const carouselRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = carousel.clientWidth * 0.8;
    carousel.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollCheck = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setShowLeftBtn(carousel.scrollLeft > 0);
    setShowRightBtn(
      carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth
    );
  };

  return (
    <div className="container">
      <div className="title-container d-flex justify-content-between align-items-center mb-2 mx-3">
        <div className="title fw-bold">Bakery and Biscuits</div>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>

      <div className="container d-flex position-relative">
        {showLeftBtn && (
          <div className="left-slider-container position-absolute h-100 d-flex align-items-center left-0">
            <span
              className="left-slider-icon"
              onClick={() => handleScroll("prev")}>
              <i className="fa-solid fa-angle-left"></i>
            </span>
          </div>
        )}

        <div
          id="carouselExample"
          className="carousel card-section d-flex flex-column position-relative bg-white overflow-hidden">
          <div
            className="carousel-inner cards-container d-flex flex-row align-items-center h-100 mx-0 px-0"
            ref={carouselRef}
            onScroll={handleScrollCheck}>
            {BakeryAndBiscuitsData.map((data, index) => (
              <div className="card-container h-100" key={index}>
                <div className="product-card">
                  <div className="img-container position-relative w-100 overflow-hidden">
                    <div className="img-box d-flex justify-content-center align-items-center w-100 h-100">
                      <div className="img-box-inner">
                        <img
                          src={data.src}
                          alt={data.name}
                          className="card-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card-body card-body-container d-flex flex-column px-3">
                    <div className="deliveryTime-container d-flex align-items-center">
                      <div className="deliveryTime-inner-container gap-1 d-flex align-items-center h-100">
                        <div className="timer-icon-container d-flex pb-1 align-items-center">
                          <img
                            src={timerIcon}
                            alt="Timer Icon"
                            className="timer-icon"
                          />
                        </div>
                        <div className="time">{data.deliveryTime}</div>
                      </div>
                    </div>

                    <div className="card-title-body-container d-flex flex-column w-100">
                      <div className="card-title-container d-flex w-100 mb-2">
                        <h6 className="card-title">{data.name}</h6>
                      </div>
                      <div className="quantity-container">
                        <p className="quantity text-muted">{data.quantity}</p>
                      </div>
                      <div className="price-container d-flex justify-content-between align-items-center">
                        <div className="price d-flex align-items-center gap-1">
                          <span>&#8377;</span> {data.price}
                        </div>
                        <div className="addToCartBtn">
                          <button className="addbtn">ADD</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showRightBtn && (
          <div className="right-slider-container position-absolute h-100 d-flex align-items-center right-0">
            <span
              className="right-slider-icon"
              onClick={() => handleScroll("next")}>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BakeryAndBiscuits;
