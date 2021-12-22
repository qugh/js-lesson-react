import s from './TabNavigation.module.scss'
import {faChartPie, faBriefcase, faBorderAll} from "@fortawesome/free-solid-svg-icons";
import {TabItem} from "./TabItem/TabItem";
import {tabItems} from "../../constants";
import {useState} from "react";

export const TabNavigation = () => {
    const [activeTab, selectTab] = useState(1);
    return (
        <div className={s.tabs}>
            <div className={s.container}>
                <TabItem id={1} tabsStatus={{activeTab, selectTab}} href="/home"
                         title={tabItems.ACTIVE_TAB} icon={faBorderAll}/>
                <TabItem id={2} tabsStatus={{activeTab, selectTab}} href="/about"
                         title={tabItems.INACTIVE_TAB} icon={faChartPie}/>
                <TabItem id={3} tabsStatus={{activeTab, selectTab}} href="/contacts"
                         title={tabItems.INACTIVE_TAB} icon={faBriefcase}/>
            </div>
        </div>
    )
}
