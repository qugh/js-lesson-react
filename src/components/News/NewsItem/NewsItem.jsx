import { NavLink } from "react-router-dom";
import styles from "../News.module.scss";
import { useState } from "react";
import cardImage from "../../../assets/images/card1.jpg";
import { ReactComponent as HeartImage } from "../../../assets/images/heart.svg";
import clsx from "clsx";

export const NewsItem = (props) => {
  const [isLiked, setIsLiked] = useState(0);
  return (
    <div className={styles.news_card}>
      <div className={styles.img_block}>
        <img src={cardImage} alt="card-img" />
        <div
          className={styles.like}
          onClick={() => setIsLiked((prev) => !prev)}
        >
          <HeartImage
            className={clsx([isLiked && styles.fill_red, styles.like_img])}
          />
        </div>
      </div>
      <div className={styles.title_date}>
        <div className={styles.title}>
          <div>
            <h4>{props.title}</h4>
          </div>
          <div>
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div className={styles.date}>
          <p>{props.date}</p>
        </div>
      </div>
      <div className={styles.main_text}>{props.text}</div>
      <div className={styles.read_more}>
        <div>
          <NavLink to={props.href}>Read more</NavLink>
        </div>
      </div>
    </div>
  );
};
