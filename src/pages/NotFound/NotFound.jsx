import c from "./NotFound.module.css";
import notFoundImage from "./images/notfound.png";

const NotFound = () => {
  return (
    <div className={c.notFoundContainer}>
      <img src={notFoundImage} alt="Not Found" className={c.image} />
    </div>
  );
};

export default NotFound;
