import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "../carousel/img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // ✅ required for styling
import styles from "./Carousel.module.css"; // ✅ correct import for CSS module

const CarouselEffect = () => {
  return (
    <div className={styles.hero_img}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
     
  
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img src={imageItemLink} alt={`slide-${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
