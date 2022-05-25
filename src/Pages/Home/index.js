import LayoutDefault from "../../Components/Layouts/LayoutDefault";
import Banner from "../../Components/Sections/Banner";
import Featured from "../../Components/Sections/Featured";
import TopDeal from "../../Components/Sections/TopDeal";
import Partners from "../../Components/Sections/Partners";
import Deals from "../../Components/Sections/Deals";
import { useSelector } from "react-redux";

const Home = () => {
  const { discounts } = useSelector((state) => state.discounts);
  const { coupons } = useSelector((state) => state.coupons);

  return (
    <LayoutDefault>
      <Banner></Banner>
      <div className="bgStyled">
        <TopDeal></TopDeal>
        <Partners></Partners>
        <Deals discounts={discounts}></Deals>
        <Featured coupons={coupons} />
      </div>
    </LayoutDefault>
  );
};

export default Home;
