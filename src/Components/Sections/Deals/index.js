import StyledCoupon from "../../StyledCoupon";

import Classes from "../../../Styles/Deals.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Deals = () => {
  const { discounts } = useSelector((state) => state.discounts);
  const {merchants} = useSelector(state => state.merchants)
  // const merchant = discounts?.discount?.map(discount => merchants?.merchant?.find(merchant => merchant?._id === discount?.merchant))
    //  console.log(merchants)
  

  return (
    <div>
      <h2 className="Row title">Discount Deals</h2>

      <div className={Classes.StyledDealsWrapper}>
        {discounts?.discount?.map((discount, index) => (
          
            <StyledCoupon
              key={discount?._id}
              discount={discount}
             
              type="deals"
            />
          
        ))}
      </div>
    </div>
  );
};

export default Deals;
