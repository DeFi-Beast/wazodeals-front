import StyledCoupon from "../../StyledCoupon";
// import Classes from "../../../Styles/Coupon.module.css";
import Classes from "../../../Styles/Deals.module.css";
import {useEffect, useState} from "react"
import axios from "axios";
import BaseURL from "../../Helper";






// import cImg1 from "../../../Assets/kbn.png";
// import cImg2 from "../../../Assets/aq.png";
// import cImg3 from "../../../Assets/tc.png";
// import cImg4 from "../../../Assets/rol.png";
import cImg1 from "../../../Assets/flott.png";
import cImg2 from "../../../Assets/lana.png";
import cImg3 from "../../../Assets/Retro.png";
import cImg4 from "../../../Assets/eld.png";
import cImg5 from "../../../Assets/tony.png";
import cImg6 from "../../../Assets/brooke.png";
import cImg7 from "../../../Assets/pearl.png";
import cImg8 from "../../../Assets/bex.png";
import cImg9 from "../../../Assets/vine.png";
import cImg10 from "../../../Assets/nature.png";
import cImg11 from "../../../Assets/nuru.png";
import cImg12 from "../../../Assets/elec.png";





const Deals = () => {
  const topCoupon = [
    {
      id: 1,
      cImg: `${cImg1}`,
      title: "Flott Beauty Trad Spa",
      description:"body bath, exfoliating scrubs, saunna, full body wax with brazilian,turmeric body mask ...",
      discount: 20,
      price:25000,
      location:"Maitama, Abuja", 
      point:50,
    },
    {
      id: 2,
      cImg: `${cImg2}`,
      title: "Lana's Food",
      description:"banga soup bachelor, size of 10 person",
      discount: 20,
      price:10000,
      location:"Igando, Lagos", 
      point:100,
    },
    {
      id: 3,
      cImg: `${cImg3}`,
      title: "Retro Kitchen",
      description:"village rice (freshly made food)",
      discount: 20,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 4,
      cImg: `${cImg4}`,
      title: "EL DORADO SALON & SPA",
      description:"hot stone massage for couple or 2 friends",
      discount: 40,
      price:25000,
      location:"Ogba, Lagos", 
      point:100,
    },
    {
      id: 5,
      cImg: `${cImg5}`,
      title: "TONY LASH LADY",
      description:"eye brows beautification",
      discount: 20,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 6,
      cImg: `${cImg6}`,
      title: "BROOKE ADDISON",
      description:"2 bedroom apartments",
      discount: 30,
      price:1000000,
      location:"Oniru, Lagos", 
      point:150,
    },
    {
      id: 7,
      cImg: `${cImg7}`,
      title: "PEARLWOOD HOTELS",
      description:"executive deluxe",
      discount: 25,
      price:300000,
      location:"Ketu, Lagos", 
      point:200,
    },
    {
      id: 8,
      cImg: `${cImg8}`,
      title: "BEX SALON & SPA",
      description:"massage,pedicure,nails",
      discount: 20,
      price:10000,
      location:"Magodo, Lagos", 
      point:100,
    },
    {
      id: 9,
      cImg: `${cImg9}`,
      title: "VINEYARD BODYS",
      description:"radio frequency facials",
      discount: 30,
      price:20000,
      location:"Ketu, Lagos", 
      point:200,
    },
    {
      id: 10,
      cImg: `${cImg10}`,
      title: "NATURE WELL GEL",
      description:"relaxation massage",
      discount: 20,
      price:20000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 11,
      cImg: `${cImg11}`,
      title: "7 STAR NURU MASSAGE",
      description:"nuru massage",
      discount: 40,
      price:10000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    {
      id: 12,
      cImg: `${cImg12}`,
      title: "ELECCION TAKEOUT",
      description:"rice delicacies",
      discount: 40,
      price:20000,
      location:"Ikeja, Lagos", 
      point:100,
    },
    
  ];


  
  const [deals, setDeals] = useState("")
  const [merchants, setMerchants] = useState("")

  useEffect(() => {
   
    // dispatch(login())
  

  let one = `${BaseURL}/discount`;
  let two = `${BaseURL}/api/merchant`;
  // let two = `${BaseURL}/referred`;
  // const config = {
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // };
  const requestOne = axios.get(one, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",

    },
  });
  const requestTwo = axios.get(two, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",

    },
  });

  // const requestTwo = axios.get(two, config);

  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];

        // use/access the results
        console.log(responseOne, responseTwo);
        
        const resultOne = responseOne.data;
        const resultTwo = responseTwo.data;

        setDeals(resultOne.discount)
        setMerchants(resultTwo.merchant)


        console.log(resultOne)
        console.log(deals)
        
        console.log(resultTwo);
      if (resultTwo.success) {
       
        console.log(resultTwo)
       
      }
      })
    )
    .catch((errors) => {
      // react on errors.
      console.error(errors);
    });

  }, [])

  console.log(deals)
  

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
