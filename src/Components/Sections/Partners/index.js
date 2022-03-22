import StyledCoupon from "../../StyledCoupon";
import Classes from "../../../Styles/Coupon.module.css";
import  { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay }from "swiper"
import "swiper/css";
import styled from "styled-components";



import checkup from "../../../Assets/Checkup.png";
import kiss from "../../../Assets/kiss.png";
import aquilla from "../../../Assets/Aquilla.png";
import eldorado from "../../../Assets/Eldorado.png";
import hotels from "../../../Assets/Hotels.png";
import pest from "../../../Assets/pest.png";


SwiperCore.use([Autoplay])


const Partners = () => {
    const Div = styled.div`
        width:100px;

    `
    
  
  return (
    <div>
        <div className="Row">
        <h1>Our Partners</h1>

        
      <Swiper
        
        loop={true}
        autoplay={{
            // "delay": 4000,
            "disableOnInteraction": false,
            
          }}
        breakpoints={{
          512: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
      >
       
         
            <SwiperSlide style={{display:"flex", alignItems:"center", justifyContent:"center"}} >
              <Div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={checkup} alt="coupon"></img>
              </Div>
              </SwiperSlide>
              <SwiperSlide>
              <Div>
                <img src={kiss} alt="coupon"></img>
              </Div>
              </SwiperSlide>
              <SwiperSlide>
              <Div>
                <img src={aquilla} alt="coupon"></img>
              </Div>
              </SwiperSlide>
              <SwiperSlide>
              <Div>
                <img src={eldorado} alt="coupon"></img>
              </Div>
              </SwiperSlide>
              <SwiperSlide>
              <Div>
                <img src={hotels} alt="coupon"></img>
              </Div>
              </SwiperSlide>
              <SwiperSlide>
              <Div>
                <img src={pest} alt="coupon"></img>
              </Div>
            </SwiperSlide>
          
        
      </Swiper>
      </div>
    </div>
  );
};

export default Partners;
