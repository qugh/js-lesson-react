import styles from '../DataTable.module.scss'
import {useEffect, useState } from 'react'
import clsx from 'clsx'
import { errors } from '../../../configs/errors'
import useStore from "../../../hooks/useStore";

export const JumpToThePage = ({ pagesCount }) => {
  const [isActive, setIsActive] = useState(0)
  const [jumpValue, setJumpValue] = useState()
  const [errorValue, setErrorValue] = useState(errors.incorrectValue)
  const [errorVisible, setErrorVisible] = useState(0)
  const myContext = useStore();
  useEffect(() => {
    pagesCount > 9 ? setIsActive(1) : setIsActive(0)
  }, [pagesCount])
  console.log(jumpValue)
  if (!isActive) return null
  // второй вариант - добавить класс hidden в clsx (isActive || styles.hidden) - так сделал бы я, если бы не было вашей подсказки :)
  return (
    <div className={clsx(styles.jump_block)}>
      <input
        className={styles.jump_toThePage}
        type="text"
        value={jumpValue}
        onChange={(e) => setJumpValue(e.target.value)}
        placeholder="№"
      />
      <button
        className={styles.jump_button}
        onClick={() => {
            if(parseInt(jumpValue)){
          if (jumpValue > 0 && jumpValue <= pagesCount) {
            myContext.currentPage.setCurrentPage(jumpValue)
          } else {
            setErrorValue(errors.incorrectValue)
            setErrorVisible(1)
            setTimeout(() => {
              setErrorVisible(0)
              setErrorValue('')
            }, errors.errorShowTime)
          }
        }
            else{
                setErrorValue(errors.notANumber)
                setErrorVisible(1)
                setTimeout(() => {
                    setErrorVisible(0)
                    setErrorValue('')
                }, errors.errorShowTime)
            }
        }}
      >
        Jump
      </button>
      <span
        className={clsx([styles.jump_Alert, errorVisible && styles.visible])}
      >
        {errorValue}
      </span>
    </div>
  )
}
