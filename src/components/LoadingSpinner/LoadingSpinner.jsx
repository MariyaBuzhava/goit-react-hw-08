import c from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={c.spinnerContainer}>
      <div className={c.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
