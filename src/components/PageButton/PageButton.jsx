import clsx from "clsx";
import styles from "../../containers/DataTable/DataTable.module.scss";
import {StoreContext} from "../../App";
import {useContext} from "react";

export const PageButton = ({pageNumber}) => {
    const myContext = useContext(StoreContext)
    return(
        <div>
            <button
                className={clsx([
                    styles.page_button,
                    pageNumber  == myContext.currentPage.currentPage && styles.active,
                ])}
                onClick={() => myContext.currentPage.setCurrentPage(pageNumber )}
            >
                {pageNumber}
            </button>
        </div>
    )
}