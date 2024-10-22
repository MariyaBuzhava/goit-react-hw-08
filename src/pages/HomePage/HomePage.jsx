import c from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={c.homepage}>
      <div className={c.hero}>
        <h1 className={c.title}>Welcome to MyContacts</h1>
        <p className={c.description}>
          Easily manage all your contacts in one place. Add, find, or delete
          them with a single click!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
