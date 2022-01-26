import StyledCoupon from "../../StyledCoupon";
import Classes from "../../../Styles/Coupon.module.css";
// Import Swiper React components
import  { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay }from "swiper"
// Import Swiper styles
import "swiper/css";



import cImg1 from "../../../Assets/food.png";
import cImg2 from "../../../Assets/fashion.png";
import cImg3 from "../../../Assets/cloth.png";
import cImg4 from "../../../Assets/cinema.png";
import cImg5 from "../../../Assets/electronics.png";
import cLogo1 from "../../../Assets/brandlogos/kfc.png";
import cLogo2 from "../../../Assets/brandlogos/marykay.png";
import cLogo3 from "../../../Assets/brandlogos/hermes.png";
import cLogo4 from "../../../Assets/brandlogos/genesis.png";
import cLogo5 from "../../../Assets/brandlogos/lg.png";

SwiperCore.use([Autoplay])


const TopDeal = () => {
  const topCoupon = [
    {
      id: 1,
      cImg: `${cImg1}`,
      cLogo: `${cLogo1}`,
      title: "KFC Food Feast",
      discount: "40%",
    },
    {
      id: 2,
      cImg: `${cImg2}`,
      cLogo: `${cLogo2}`,
      title: "Mary Kay Galore",
      discount: "20%",
    },
    {
      id: 3,
      cImg: `${cImg3}`,
      cLogo: `${cLogo3}`,
      title: "Hermes Cloth Festival",
      discount: "50%",
    },
    {
      id: 4,
      cImg: `${cImg4}`,
      cLogo: `${cLogo4}`,
      title: "Genesis Cinema Promo",
      discount: "30%",
    },
    {
      id: 5,
      cImg: `${cImg5}`,
      cLogo: `${cLogo5}`,
      title: "LG ElectroFeast",
      discount: "15%",
    },
  ];
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {topCoupon.map((coupon, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledCoupon coupon={coupon} ></StyledCoupon>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TopDeal;
