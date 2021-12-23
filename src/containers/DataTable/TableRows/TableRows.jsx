import {useContext} from "react";
import s from '../DataTable.module.scss'
import {TableItem} from "../TableItem/TableItem";
import {StoreContext} from "../../../App";


export const TableRows = (props) => {
    const myData = useContext(StoreContext)

    return (
        <table>

            <col span={3} className={s.colgroup_style1}/>

            <thead>
            <tr>
                {props.columns.map((column, key) => {
                    return (
                        <td key={column.id}>{column.title}</td>
                    )
                })}
            </tr>
            </thead>
            <tbody>


            {props.data.map((item, key) => {
                return (
                    item.id > myData.tableItems.maxTableItems * myData.currentPage.currentPage - myData.tableItems.maxTableItems
                    &&
                    item.id <= myData.tableItems.maxTableItems * myData.currentPage.currentPage ?
                        <TableItem
                            position={item.position}
                            location={item.location}
                            price={item.price}
                            key={item.id}
                        /> : null

                )
            })}


            </tbody>
        </table>
    )
}