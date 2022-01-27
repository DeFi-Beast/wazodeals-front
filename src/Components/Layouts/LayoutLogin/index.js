import { Div } from "./LayoutStyled";
// import background from "../../../Assets/women.png"

const LayoutLogin = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Div>
        <h3>BAG HIGH DISCOUNT DEALS &amp; EARN POINTS</h3>
      </Div>
      {props.children}
    </div>
  );
};

export default LayoutLogin;
