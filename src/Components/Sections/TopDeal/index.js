import StyledCoupon from "../../StyledCoupon";
import Classes from "../../../Styles/Coupon.module.css";

// Import Swiper React components
import  { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay }from "swiper"

// Import Swiper styles
import "swiper/css";





SwiperCore.use([Autoplay])


const TopDeal = () => {
  
  return (
    <div>
        <div className="Row">
        <h1>Shop Today's Hot Deals, Save Big &amp; Earn Points</h1>

        </div>
      <Swiper
        className={Classes.StyledCouponWrapper}
        loop={true}
        autoplay={{
            "delay": 2500,
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {/* {topCoupon.map((coupon, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledCoupon coupon={coupon} ></StyledCoupon>
            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </div>
  );
};

export default TopDeal;
