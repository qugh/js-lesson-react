import s from './Header.module.scss'
import {Nav} from "../../components/Nav/Nav";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.hamburger}>
                    <div className={s.hamburger_layer}>
                    </div>
                </div>
                <div className={s.logo}>Company Dashboard</div>

                <Nav/>

                <div className={s.client}>
                    <span>George Orwell</span>
                    <div className={s.client_img}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header