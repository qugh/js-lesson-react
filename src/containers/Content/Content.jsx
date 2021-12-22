import {News} from "../../components/News/News";
import s from './Content.module.scss'
import {DataTable} from "../DataTable/DataTable";

export const Content = () => {
    return (
        <div className={s.main_container}>
            <DataTable/>
            <News/>
        </div>
    )
}