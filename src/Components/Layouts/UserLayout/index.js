// import Header from "../../Header"
import Navbar from "../../NavBar";
import Footer from "../../Footer";

const userLayout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default userLayout;
