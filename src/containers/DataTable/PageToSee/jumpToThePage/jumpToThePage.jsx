import s from '../../DataTable.module.scss'
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../../../App";

export const JumpToThePage = (props) => {
    const myContext = useContext(StoreContext)
    const [jumpValue, setJumpValue] = useState();
    useEffect(() => {
        console.log(jumpValue)
    }, [jumpValue])
    return (
        <div ref={props.jumpToPageRef} className={s.jump_block}>
            <input className={s.jump_toThePage} type="text" onChange={(e) => {
                if (e.target.value <= 0) {
                    e.target.value = 1
                    setJumpValue(1)
                } else if (e.target.value > 0 && e.target.value <= props.pagesCount) {
                    setJumpValue(e.target.value)
                } else {
                    e.target.value = props.pagesCount;
                    setJumpValue(props.pagesCount)
                }

            }} placeholder="№"/>
            <button className={s.jump_button} onClick={() => {
                myContext.currentPage.setCurrentPage(jumpValue)
                props.buttonState.setActive(jumpValue)
            }}>Jump
            </button>
            <span className={s.jump_Alert}></span>
        </div>
    )
}