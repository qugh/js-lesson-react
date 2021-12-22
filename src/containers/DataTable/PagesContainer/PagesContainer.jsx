import s from "../DataTable.module.scss";
import {SwitchPage} from "../SwitchPage/SwitchPage";
import {useContext} from "react";
import {StoreContext} from "../../../App";


export const PagesContainer = (props) => {

    const myContext = useContext(StoreContext)
    const pagesCount = Math.ceil(props.data.length / myContext.tableItems.maxTableItems);
    const switchPage = (type) => {
        if (type == 'next') {
            if (myContext.currentPage.currentPage < pagesCount) {
                myContext.currentPage.setCurrentPage(myContext.currentPage.currentPage + 1)
                props.buttonState.setActive(myContext.currentPage.currentPage + 1)
            }
        } else if (type == 'back') {
            if (myContext.currentPage.currentPage > 1) {
                myContext.currentPage.setCurrentPage(myContext.currentPage.currentPage - 1)
                props.buttonState.setActive(myContext.currentPage.currentPage - 1)
            }
        }
    }
    return (
        <div className={s.pages}>
            <div>
                <button className={s.back_button} onClick={() => switchPage('back')}/>
            </div>

            <div className={s.pages_counter} style={
                pagesCount > 9 ?
                    {
                        gridTemplateColumns: 'repeat(7,1fr)',
                        gridGap: '0'
                    } : {gridTemplateColumns: `repeat(${(pagesCount < 10) ? pagesCount : 10},1fr)`, gridGap: '19px'}
            }>
                <SwitchPage setActive={props.buttonState.setActive} activeState={props.buttonState.activeState}
                            dataLength={props.data.length}
                            maxItems={myContext.tableItems.maxTableItems}
                            pageNumber={myContext.currentPage.currentPage}/>

            </div>

            <div>
                <button className={s.next_button} onClick={() => switchPage('next')}/>
            </div>
        </div>
    )
}