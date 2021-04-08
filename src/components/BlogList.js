

const BlogList = ({ blogs, title, handleDelete}) => { 
    
    return (
        <div>
            <h1> {title} </h1> 
            {
                blogs.map((blog) => (
                    <div className="blog__preview" key={blog.id}>
                        <h2> {blog.title} </h2>
                        <p> Writen by { blog.author } </p>
                       <button className="delete" onClick={() => handleDelete(blog.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList
