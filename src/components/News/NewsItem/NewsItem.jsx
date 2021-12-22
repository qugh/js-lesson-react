import {NavLink} from "react-router-dom";
import s from '../News.module.scss'
import {useRef} from "react";

export const NewsItem = (props) => {
    const likeImgRef = useRef(null)
    return (
        <div className={s.news_card}>
            <div className={s.img_block}>
                <img src="./img/card1.jpg" alt="card-img"/>
                <div onClick={() => {
                    likeImgRef.current.style.fill == 'red' ? likeImgRef.current.style.fill = 'white' : likeImgRef.current.style.fill = 'red';
                }} className={s.like}>
                    <svg ref={likeImgRef} width="15" className={s.like_img} height="15">
                        <path
                            d="M13.544.979c-1.605-1.492-3.993-1.224-5.467.435l-.577.648-.577-.648C5.453-.245 3.062-.513 1.456.979c-1.84 1.713-1.936 4.788-.29 6.644l5.67 6.386a.867.867 0 0 0 1.326 0l5.67-6.386c1.648-1.856 1.552-4.93-.288-6.644Z"
                            fill="#ссс"/>
                    </svg>
                </div>
            </div>
            <div className={s.title_date}>
                <div className={s.title}>
                    <div>
                        <h4>{props.title}</h4>
                    </div>
                    <div>
                        <p>{props.subtitle}</p>
                    </div>
                </div>
                <div className={s.date}>
                    <p>{props.date}</p>
                </div>

            </div>
            <div className={s.main_text}>
                {props.text}
            </div>
            <div className={s.read_more}>
                <div><NavLink to={props.href}>Read more</NavLink></div>
            </div>
        </div>
    )
}