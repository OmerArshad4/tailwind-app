import Images from "../ImgConstants";
const LoadingScreen = () => (
  <div>
    <img
      alt="loader"
      src={Images.Loader}
      className={"bg-red-600 fixed top-1/2 left-1/2 z-50"}
    />
  </div>
);

export default LoadingScreen;
