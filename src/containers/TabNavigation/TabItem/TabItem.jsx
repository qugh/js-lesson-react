import s from "../TabNavigation.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

export const TabItem = (props) => {

    return (
        <NavLink
            className={(props.id === props.tabsStatus.activeTab) ? `${s.tab_link} ${s.active}` : s.tab_link}
            to={props.href}
            onClick={() => {
                props.tabsStatus.selectTab(props.id)
            }}
            onMouseDown={(event) => event.preventDefault()}
        >
            <FontAwesomeIcon icon={props.icon} size="3x"/>
            <span>{props.title}</span>
        </NavLink>
    )
}