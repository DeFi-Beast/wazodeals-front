import Classes from "../../Styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={Classes.LoaderWrapper}>
      <span className={Classes.Loader}></span>
    </div>
  );
};

export default Loader;
