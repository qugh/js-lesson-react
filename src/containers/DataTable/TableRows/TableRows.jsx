import styles from '../DataTable.module.scss'
import { TableItem } from '../../../components/TableItem/TableItem'
import useStore from "../../../hooks/useStore";

export const TableRows = (props) => {
  const {tableItems,currentPage} = useStore();

  return (
    <table>
      <col span={3} className={styles.colgroup_style1} />

      <thead>
        <tr>
          {props.columns.map((column, key) => {
            return <td key={column.id}>{column.title}</td>
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, key) => {
            const isItDataForRender = item.id >
                (tableItems.maxTableItems * currentPage.currentPage - tableItems.maxTableItems)
                &&
                (item.id <= tableItems.maxTableItems * currentPage.currentPage);

          return isItDataForRender &&
              (
            <TableItem
              position={item.position}
              location={item.location}
              price={item.price}
              key={item.location}
            />
          )
        })}
      </tbody>
    </table>
  )
}
