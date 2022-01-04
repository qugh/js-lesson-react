import styles from "../TabNavigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import clsx from 'clsx'
export const TabItem = ({id,href,title,icon, activeTab,selectTab }) => {
  const isActive = id === activeTab;
  return (
    <NavLink
      className={clsx([styles.tab_link, isActive && styles.active])}
      to={href}
      onClick={() => selectTab(id)}
      onMouseDown={(event) => event.preventDefault()}
    >
      <FontAwesomeIcon icon={icon} size="3x" />
      <span>{title}</span>
    </NavLink>
  )
}