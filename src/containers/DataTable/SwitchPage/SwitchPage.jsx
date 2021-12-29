import s from '../DataTable.module.scss'
import {useContext} from "react";
import {StoreContext} from "../../../App";

export const SwitchPage = (props) => {
    const myContext = useContext(StoreContext)
    const pagesCount = Math.ceil(props.dataLength / props.maxItems);
    let buttonArray = [];
    if (pagesCount > 9) {
        // for (let i = 1; i <= pagesCount; i++) {
        //     buttonArray.push(<div>
        //         <button className={s.page_button} onClick={() => myContext.currentPage.setCurrentPage(i)}>{i}</button>
        //     </div>)
        // }
        for (let i = 0; i < 3; i++)
            buttonArray.push(<div>
                <button className={(i + 1) == props.activeState ? `${s.active} ${s.page_button}` : s.page_button}
                        onClick={() => {
                            myContext.currentPage.setCurrentPage(i + 1)
                            props.setActive(i + 1)


                        }}>{i + 1}</button>
            </div>)

        buttonArray.push(<div className={s.current_page_button}><span style={{marginRight: '5px'}}>...  </span><span><button
            className={s.page_counter_square}>{myContext.currentPage.currentPage}</button></span><span
            style={{paddingLeft: '5px'}}>...  </span></div>)
        for (let j = pagesCount - 3; j < pagesCount; j++) {
            buttonArray.push(
                <div>
                    <button className={(j + 1) == props.activeState ? `${s.active} ${s.page_button}` : s.page_button}
                            onClick={() => {
                                myContext.currentPage.setCurrentPage(j + 1)
                                props.setActive(j + 1)

                            }}>{j + 1} </button>
                </div>
            )
        }
    } else {
        for (let i = 0; i < pagesCount; i++) {
            buttonArray.push(
                <div>
                    <button className={(i + 1) == props.activeState ? `${s.active} ${s.page_button}` : s.page_button}
                            onClick={() => {
                                myContext.currentPage.setCurrentPage(i + 1)
                                props.setActive(i + 1)
                            }}>{i + 1}</button>
                </div>
            )
        }
    }
    return (

        <>
            {buttonArray}
        </>
    )
}