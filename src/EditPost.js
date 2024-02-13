import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import DataContext from "./Context/DataContext";

const EditPost = () => {

     const {posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody} = useContext(DataContext)
      const {id} = useParams();
      const post = posts.find(post => (post.id).toString() === id);

      useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditBody(post.body);
        }
      },[post, setEditTitle, setEditBody])
    return (
       <main className="NewPost">
            <h2>Edit Post</h2>
            { editTitle && 
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    value={editTitle} 
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Body:</label>
                <input 
                    type="text"
                    id="postBody"
                    value={editBody} 
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
            }
            {!editTitle &&
                <>
                    <h2>Page Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                    Visit Our Homepage
                    </p>
                </>

            }
       </main>
    )
}

export default EditPost