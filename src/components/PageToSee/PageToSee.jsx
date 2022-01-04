import styles from "../../containers/DataTable/DataTable.module.scss";
import { useEffect, useRef} from "react";
import { JumpToThePage } from "../../containers/DataTable/jumpToThePage/jumpToThePage";
import useStore from "../../hooks/useStore";
export const PageToSee = ({pagesCount}) => {
    const selectRef = useRef(null);
    const myContext = useStore();
    useEffect(() => {
        if (selectRef.current) {
            selectRef.current.scrollIntoView({
                behavior: "smooth",
                block: "end",
            });
        }
    }, [myContext.tableItems.maxTableItems]);

  return (
    <div className={styles.page_to_see}>
      <select
        ref={selectRef}
        className={styles.elements_count}
        onChange={(event) => {
          myContext.tableItems.setMaxTableItems(parseInt(event.target.value));
          myContext.currentPage.setCurrentPage(1);
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <JumpToThePage
        pagesCount={pagesCount}
      />
    </div>
  );
};