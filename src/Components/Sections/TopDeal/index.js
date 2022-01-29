import StyledCoupon from "../../StyledCoupon";
import Classes from "../../../Styles/Coupon.module.css";
// Import Swiper React components
import  { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Autoplay }from "swiper"
// Import Swiper styles
import "swiper/css";



import cImg1 from "../../../Assets/kbn.png";
import cImg2 from "../../../Assets/aq.png";
import cImg3 from "../../../Assets/tc.png";
import cImg4 from "../../../Assets/rol.png";


SwiperCore.use([Autoplay])


const TopDeal = () => {
  const topCoupon = [
    {
      id: 1,
      cImg: `${cImg1}`,
      title: "Kissed By Nature",
      description:"about 60mins of deep relaxing and healing treatment",
      discount: 20,
      price:25000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 2,
      cImg: `${cImg2}`,
      title: "Aquilla Kitchen",
      description:"fried rice(coleslaw and chicken)",
      discount: 20,
      price:5000,
      location:"Ikeja, Lagos", 
      point:50,

    },
    {
      id: 3,
      cImg: `${cImg3}`,
      title: "Teeth City",
      description:"teeth whitening, scaling and polishing & tooth filling",
      discount: 20,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 4,
      cImg: `${cImg4}`,
      title: "Rollance Logistics",
      description:"freight and cargo",
      discount: 20,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
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
