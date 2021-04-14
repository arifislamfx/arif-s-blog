import { useHistory, useParams } from "react-router"
import UseFetch from "./UseFetch";


const BlogDetails = () => {

    const { id } = useParams();
    const { data:blog, isPanding, error } = UseFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
        
    }

    return (
        <div className="blog__details">
          { isPanding && <div>Loading....</div> }
          { error && <div> {error} </div> }
          { blog && (
              <article>
                  <h2> {blog.title} </h2>
                  <p>Written by { blog.author }</p>
                  <div className="blog__details__body">
                  <p> { blog.body }</p> 
                  <button className="delete__blog" onClick={handleDelete}>Delete</button>
               </div>
              </article>
          ) }
        </div>
    )
}

export default BlogDetails;
