import { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import DataContext from "./Context/DataContext";

const PostPage = () => {
    const {posts, handleDelete} = useContext(DataContext)

   const {id} = useParams();
   const post = posts.find(post => 
     (post.id).toString() === id );

    return(
        <main className="PostPage">
            <article className="Post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="PostDate">{post.datetime}</p>
                        <p className="PostBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                        <Link to={`/edit/${post.id}`}>
                            <button>Edit Post</button>
                        </Link>
                        
                    </>
                }
                {!post &&
                    <>
                        <h2>Page Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                        Visit Our Homepage
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage