import clsx from "clsx";
import styles from "../../containers/DataTable/DataTable.module.scss";
import useStore from "../../hooks/useStore";

export const PageButton = ({pageNumber}) => {
    const myContext = useStore();
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