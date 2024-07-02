import style from "./Screen.module.css";
import posts from "../../json/posts.json"
import { Post } from "../Post/Post";



export function Screen() {

  return (

    <main>

      <ul className={style.posts}>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>

    </main>
  )

}