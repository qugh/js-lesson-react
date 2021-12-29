import s from "../DataTable.module.scss";
import {StoreContext} from "../../../App";
import {useContext, useEffect, useRef} from "react";
import {JumpToThePage} from "./jumpToThePage/jumpToThePage";


export const PageToSee = (props) => {
    const selectRef = useRef(null)

    const myContext = useContext(StoreContext)
    useEffect(() => {
            if (selectRef.current) {
                selectRef.current.scrollIntoView(
                    {
                        behavior: 'smooth',
                        block: 'end'
                    })
            }
        },
        [myContext.tableItems.maxTableItems])
    return (
        <div className={s.page_to_see}>
            <select ref={selectRef} className={s.elements_count}
                    onChange={(event) => {
                        myContext.tableItems.setMaxTableItems(event.target.value)
                        myContext.currentPage.setCurrentPage(1)
                        props.buttonState.setActive(1)

                    }
                    }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
            </select>
            <JumpToThePage buttonState={props.buttonState} pagesCount={props.pagesCount}
                           jumpToPageRef={props.jumpToPageRef}/>
        </div>
    )
}