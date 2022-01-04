import styles from '../DataTable.module.scss'
import { SwitchPage } from '../SwitchPage/SwitchPage'
import useStore from "../../../hooks/useStore";

export const PagesContainer = (props) => {
  const myContext = useStore();
  const pagesCount = Math.ceil(
    props.data.length / myContext.tableItems.maxTableItems
  )
  const nextButton = () => {
    if (myContext.currentPage.currentPage < pagesCount) {
      myContext.currentPage.setCurrentPage(++myContext.currentPage.currentPage)
    }
  }

  const backButton = () => {
    if (myContext.currentPage.currentPage > 1) {
      myContext.currentPage.setCurrentPage(--myContext.currentPage.currentPage)
    }
  }

  return (
    <div className={styles.pages}>
      <div>
        <button
          className={styles.back_button}
          onClick={() => backButton()}
        />
      </div>

      <div
        className={styles.pages_counter}
        style={
          pagesCount > 9
            ? {
                gridTemplateColumns: 'repeat(7,1fr)',
                gridGap: '0',
              }
            : {
                gridTemplateColumns: `repeat(${
                  pagesCount < 10 ? pagesCount : 10
                },1fr)`,
                gridGap: '19px',
              }
        }
      >
        <SwitchPage
          dataLength={props.data.length}
          maxItems={myContext.tableItems.maxTableItems}
          pageNumber={myContext.currentPage.currentPage}
        />
      </div>

      <div>
        <button
          className={styles.next_button}
          onClick={() => nextButton()}
        />
      </div>
    </div>
  )
}
