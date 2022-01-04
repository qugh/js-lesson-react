import styles from "./TabNavigation.module.scss";
import {
  faChartPie,
  faBriefcase,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import { TabItem } from "./TabItem/TabItem";
import { tabItems } from "../../configs/constants";
import { useState } from "react";

export const TabNavigation = () => {
  const [activeTab, selectTab] = useState(1);
  return (
    <div className={styles.tabs}>
      <div className={styles.container}>
        <TabItem
          id={1}
          activeTab = {activeTab}
          selectTab = {selectTab}
          href="/home"
          title={tabItems.ACTIVE_TAB}
          icon={faBorderAll}
        />
        <TabItem
          id={2}
          activeTab = {activeTab}
          selectTab = {selectTab}
          href="/about"
          title={tabItems.INACTIVE_TAB}
          icon={faChartPie}
        />
        <TabItem
          id={3}
          activeTab = {activeTab}
          selectTab = {selectTab}
          href="/contacts"
          title={tabItems.INACTIVE_TAB}
          icon={faBriefcase}
        />
      </div>
    </div>
  );
};
