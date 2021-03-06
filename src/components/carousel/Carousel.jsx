import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/js/dist/carousel';

function createCarouselItem(active, image) {
  return (
    <div className={`carousel-item ${active === true ? 'active' : ''}`}>
      <img src={image} alt="Carousel Item" className="d-block w-100" />
    </div>
  );
}

export default function Carousel(props) {
  const { images } = props;
  return (
    <div id="carouselHomePage" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {
          images.map((image, index) => {
            if (index === 0) {
              return createCarouselItem(true, image);
            }
            return createCarouselItem(false, image);
          })
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselHomePage" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselHomePage" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
