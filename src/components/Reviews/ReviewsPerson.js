import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import ReviewImageFirst from '../../assets/img/reviews/review-1.jpg'
import ReviewImageSecond from '../../assets/img/reviews/review-2.jpg'
import ReviewImageThird from '../../assets/img/reviews/review-3.jpg'
import ReviewImageFourth from '../../assets/img/reviews/review-4.jpg'
import ReviewImageFifth from '../../assets/img/reviews/review-5.jpg'


const ReviewsPerson = () => {
  // HIT API To Get Reviews Later
  
  
  return (
    <>
      <Swiper 
        data-aos={"fade-up"}
        data-aos-delay={'100'}
        className="swiper-container reviews-slider"
        modules={[Pagination, Navigation, Autoplay]}
        cssMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={'auto'}
        // loop={true}
        speed={600}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{ 320: {slidesPerView: 1, spaceBetween: 20}, 1200: {slidesPerView: 3, spaceBetween: 20} }}
        
        // navigation={true}
      >
        <SwiperSlide>
          <div className="reviews-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias voluptatibus sequi sed officia facere saepe aperiam at maxime ratione?/</p>
            <img src={ReviewImageFirst} className="reviews-img" alt="Student" />
            <h3>Anonymous</h3>
            <h4>Student</h4>            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias voluptatibus sequi sed officia facere saepe aperiam at maxime ratione?/</p>
            <img src={ReviewImageSecond} className="reviews-img" alt="Student" />
            <h3>Anonymous</h3>
            <h4>Student</h4>
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias voluptatibus sequi sed officia facere saepe aperiam at maxime ratione?/</p>
            <img src={ReviewImageThird} className="reviews-img" alt="Student" />
            <h3>Anonymous</h3>
            <h4>Student</h4>
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias voluptatibus sequi sed officia facere saepe aperiam at maxime ratione?/</p>
            <img src={ReviewImageFourth} className="reviews-img" alt="Student" />
            <h3>Anonymous</h3>
            <h4>Student</h4>
          </div>          
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviews-item">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita molestias voluptatibus sequi sed officia facere saepe aperiam at maxime ratione?/</p>
            <img src={ReviewImageFifth} className="reviews-img" alt="Student" />
            <h3>Anonymous</h3>
            <h4>Student</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ReviewsPerson