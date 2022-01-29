import Coupon from "../../BrandCoupon"
import Classes from "../../../Styles/Coupon.module.css"

const Featured = ()  => {
    return (
       <div >
        <h2 className="Row title">Featured Coupons</h2>
            <div className={Classes.CouponContainer}>
            <Coupon></Coupon>
           <Coupon></Coupon>
           <Coupon></Coupon>
            </div>
           
       </div>
    )
}


export default Featured
