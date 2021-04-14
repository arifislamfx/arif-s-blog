import { Link } from "react-router-dom"

const BlogList = ({ blogs, title}) => { 

    return (
        <div>
            <h1> {title} </h1> 
            {
                blogs.map((blog) => (
                    <div className="blog__preview" key={blog.id}>
                      <Link to = {`/blogs/${blog.id}`}>
                      <h2> {blog.title} </h2>
                        <p> Writen by { blog.author } </p>
                      </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList

// eslint-disable-next-line no-lone-blocks
{/* <button className="delete" onClick={() => handleDelete(blog.id)}>delete</button>  */}