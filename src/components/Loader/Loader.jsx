import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  <div>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="150"
      visible={true}
    />
  </div>;
};

export default Loader;
