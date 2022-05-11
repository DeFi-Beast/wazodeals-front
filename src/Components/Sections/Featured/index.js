import { useSelector } from "react-redux";
import Coupon from "../../BrandCoupon";
import Classes from "../../../Styles/Coupon.module.css";

const Featured = () => {
  const { coupons } = useSelector((state) => state.coupons);
console.log(coupons)
  return (
    <div>
      <h2 className="Row title">Featured Coupons</h2>
      <div className={Classes.CouponContainer}>
        {coupons?.coupons?.slice(0, 6).map((coupon, index) => (
          <Coupon coupon={coupon}></Coupon>
        ))}
      </div>
    </div>
  );
};

export default Featured;
