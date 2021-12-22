import {NewsItem} from "./NewsItem/NewsItem";
import s from './News.module.scss'
import {AddNews} from "./AddNews/AddNews";

export const News = () => {
    return (
        <div className={s.news}>

            <NewsItem
                href="/news1"
                title="Title"
                subtitle="Subtitle test"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             A alias aperiam asperiores beatae blanditiis consequuntur dolorum esse eveniet
              explicabo facere iusto laboriosam laudantium mollitia nostrum obcaecati, similique ullam vel vero."
                date={'20.02.12'}/>
            <NewsItem
                href="/news1"
                title="Title"
                subtitle="Subtitle test"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             A alias aperiam asperiores beatae blanditiis consequuntur dolorum esse eveniet
              explicabo facere iusto laboriosam laudantium mollitia nostrum obcaecati, similique ullam vel vero."
                date={'20.02.12'}/>

            <AddNews/>
        </div>
    )
}