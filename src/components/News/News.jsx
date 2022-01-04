import { NewsItem } from "./NewsItem/NewsItem";
import styles from "./News.module.scss";
import { AddNews } from "./AddNews/AddNews";

const myNews = [
  {
    href: "/news1",
    title: "Title",
    subtitle: "Subtitle test",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam asperiores beatae blanditiis consequuntur dolorum esse eveniet " +
      "explicabo facere iusto laboriosam laudantium mollitia nostrum obcaecati, similique ullam vel vero.",
    date: new Date().toLocaleString(),
  },
  {
    href: "/news2",
    title: "Title2",
    subtitle: "Subtitle test2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam asperiores beatae blanditiis consequuntur dolorum esse eveniet " +
      "explicabo facere iusto laboriosam laudantium mollitia nostrum obcaecati, similique ullam vel vero.",
    date: new Date().toLocaleString(),
  },
];

export const News = () => {
  return (
    <div className={styles.news}>
      {myNews.map((item, key) => (
        <NewsItem
          key={item.href}
          href={item.href}
          title={item.title}
          subtitle={item.subtitle}
          text={item.text}
          date={item.date}
        />
      ))}

      <AddNews />
    </div>
  );
};
