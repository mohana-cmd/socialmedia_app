import { useContext } from "react"
import DataContext from "./Context/DataContext"

const NewPost = () => {

  const {handleSubmit, postTitle, setPostTitle, postBody, setPostBody} = useContext(DataContext)
    return(
        <main className="NewPost">
            <h1>NewPost</h1>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input 
                  type="text"
                  id="postTitle"
                  value={postTitle}
                  required
                  onChange={(e) => setPostTitle(e.target.value) }
                />
                <label htmlFor="postBody">Post:</label>
                <textarea 
                  id="postBody"
                  value={postBody}
                  required
                  onChange={(e) => setPostBody(e.target.value) }
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost