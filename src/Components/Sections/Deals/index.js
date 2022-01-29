import StyledCoupon from "../../StyledCoupon";
// import Classes from "../../../Styles/Coupon.module.css";
import Classes from "../../../Styles/Deals.module.css";






import cImg1 from "../../../Assets/kbn.png";
import cImg2 from "../../../Assets/aq.png";
import cImg3 from "../../../Assets/tc.png";
import cImg4 from "../../../Assets/rol.png";
import cImg5 from "../../../Assets/flott.png";
import cImg6 from "../../../Assets/lana.png";
import cImg7 from "../../../Assets/Retro.png";





const Deals = () => {
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
    {
      id: 5,
      cImg: `${cImg5}`,
      title: "Flott Beauty Trad Spa",
      description:"body bath, exfoliating scrubs, saunna, full body wax with brazilian,turmeric body mask ...",
      discount: 20,
      price:25000,
      location:"Maitama, Abuja", 
      point:50,
    },
    {
      id: 6,
      cImg: `${cImg6}`,
      title: "Lana's Food",
      description:"banga soup bachelor, size of 10 person",
      discount: 20,
      price:10000,
      location:"Igando, Lagos", 
      point:100,
    },
    {
      id: 7,
      cImg: `${cImg7}`,
      title: "Retro Kitchen",
      description:"village rice (freshly made food)",
      discount: 20,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    
  ];
  return (
    <div>
        <h2 className="Row title">Discount Deals</h2>

       
        <div className={Classes.StyledDealsWrapper}>
        {topCoupon.map((coupon, index) => {
          return (
            <div className={Classes.Deals}>
              <StyledCoupon  coupon={coupon} type="deals" ></StyledCoupon>
           </div>
          );
        })}
        </div>
       
      
    </div>
  );
};

export default Deals;
