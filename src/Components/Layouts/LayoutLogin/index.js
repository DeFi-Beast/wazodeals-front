import { Div } from "./LayoutStyled";

const Layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Div>
        <h3>BAG HIGH DISCOUNT DEALS &amp; EARN POINTS</h3>
      </Div>
      {props.children}
    </div>
  );
};

export default Layout;
