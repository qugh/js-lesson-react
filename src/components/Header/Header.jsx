import styles from "./Header.module.scss";
import { Nav } from "../Nav/Nav";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <div className={styles.hamburger_layer}></div>
        </div>
        <div className={styles.logo}>Company Dashboard</div>

        <Nav />

        <div className={styles.client}>
          <span>George Orwell</span>
          <div className={styles.client_img}></div>
        </div>
      </div>
    </div>
  );
};

export default Header