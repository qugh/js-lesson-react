import { News } from "../News/News";
import styles from "./Content.module.scss";
import { DataTable } from "../../containers/DataTable/DataTable";

export const Content = () => {
  return (
    <div className={styles.main_container}>
      <DataTable />
      <News />
    </div>
  );
};