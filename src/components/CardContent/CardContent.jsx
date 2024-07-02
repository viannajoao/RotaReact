import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import { PostModelo } from "../PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./CardContent.css";
import { NotFound } from "/src/components/NotFound/NotFound";
import { Banner } from "/src/components/Banner/Banner";


export function CardContent() {

  const params = useParams();

  const post = posts.find(post => post.id === Number(params.id))
  console.log(post);

  return (

    <>
      {(!post) ? (<NotFound />) : (
        <div>
          <Banner />
          <PostModelo FotoCapa={`/src/assets/posts/${post.id}/capa.png`} titulo={post.titulo} >

            <div className="post-markdown-container">

              <ReactMarkdown >
                {post.texto}
              </ReactMarkdown>
            </div>
          </PostModelo>
        </div>
      )}
    </>


  )


}