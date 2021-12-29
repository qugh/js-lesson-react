import s from './DataTable.module.scss'
import {TableRows} from "./TableRows/TableRows";
import {useContext, useEffect, useRef, useState} from "react";
import {StoreContext} from "../../App";
import {PageToSee} from "./PageToSee/PageToSee";
import {PagesContainer} from "./PagesContainer/PagesContainer";

export const DataTable = () => {
    const jumpToPageRef = useRef(null)
    const [jumperIsActive, setJumperActive] = useState(0);
    const [activeState, setActive] = useState(1);
    const myContext = useContext(StoreContext);
    let myData = [];
    const [data, setData] = useState([
        {}
    ]);


    useEffect(async () => {
        await fetch("https://pokeapi.co/api/v2/pokemon?offset=300&limit=100").then(response => response.json()).then(data => {
            data.results.map((item, key) => {
                myData.push({
                    id: key + 1,
                    position: key + 1,
                    location: item.name,
                    price: Math.ceil(Math.random() * 100)
                })

            })
        },[])


        setData(myData)
    }, [])
    const pagesCount = Math.ceil(data.length / myContext.tableItems.maxTableItems);
    useEffect(() => {
        if (pagesCount > 9) {
            jumpToPageRef.current.style.display = 'block'
        } else {
            jumpToPageRef.current.style.display = 'none'
        }
    }, [pagesCount])
    const columns = [
        {
            title: 'Position',
            id: 1
        },
        {
            title: 'Location',
            id: 2
        },
        {
            title: 'Price',
            id: 3
        }
    ]


    return (
        <div className={s.table}>

            <TableRows data={data} columns={columns}/>

            <PagesContainer data={data} buttonState={{setActive, activeState}}/>
            <PageToSee pagesCount={pagesCount} setJumperStatus={{jumperIsActive, setJumperActive}}
                       jumpToPageRef={jumpToPageRef} buttonState={{setActive, activeState}}/>

        </div>
    )
}