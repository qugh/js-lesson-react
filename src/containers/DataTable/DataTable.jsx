import styles from './DataTable.module.scss'
import { TableRows } from './TableRows/TableRows'
import {  useEffect, useState } from 'react'
import { PageToSee } from '../../components/PageToSee/PageToSee'
import { PagesContainer } from './PagesContainer/PagesContainer'
import useStore from "../../hooks/useStore";
export const DataTable = () => {
  const myContext = useStore();
  const [data, setData] = useState([{}])
  let myData = []
  useEffect(() => {
    const loadData = async () => {
      await fetch('https://pokeapi.co/api/v2/pokemon?offset=300&limit=100')
        .then((response) => response.json())
        .then((data) => {
          data.results.map((item, key) => {
            myData.push({
              id: key + 1,
              position: key + 1,
              location: item.name,
              price: Math.ceil(Math.random() * 100),
            })
          })
        })
      setData(myData)
    }
    loadData()
  }, [])

  const pagesCount = Math.ceil(data.length / myContext.tableItems.maxTableItems)

  const columns = [
    {
      title: 'Position',
      id: 1,
    },
    {
      title: 'Location',
      id: 2,
    },
    {
      title: 'Price',
      id: 3,
    },
  ]

  return (
    <div className={styles.table}>
      <TableRows data={data} columns={columns} />

      <PagesContainer data={data} />
      <PageToSee
        pagesCount={pagesCount}
      />
    </div>
  )
}
