import styles from '../DataTable.module.scss'
import { PageButton } from '../../../components/PageButton/PageButton'
import useStore from "../../../hooks/useStore";

export const SwitchPage = (props) => {
  const myContext = useStore();

  const pagesCount = Math.ceil(props.dataLength / props.maxItems)
  let buttonArray = []
  const MiddleButton = () => {
    return (
      <div>
        <span style={{ marginRight: '5px' }}>... </span>
        <span>
          <button className={styles.page_counter_square}>
            {myContext.currentPage.currentPage}
          </button>
        </span>
        <span style={{ paddingLeft: '5px' }}>... </span>
      </div>
    )
  }
  if (pagesCount > 9) {

    for (let i = 1; i <= 3; i++) {
      buttonArray.push(<PageButton  pageNumber={i} />)
    }

    buttonArray.push(<MiddleButton />)

    for (let i = pagesCount - 2; i <= pagesCount; i++) {
      buttonArray.push(<PageButton pageNumber={i} />)
    }

  } else {
    for (let i = 1; i <= pagesCount; i++) {
      buttonArray.push(<PageButton pageNumber={i} />)
    }
  }

  return <>{buttonArray}</>

}
