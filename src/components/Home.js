
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";


const Home = () => {
  
const { data: blogs, isPanding, error } = UseFetch('http://localhost:8000/blogs');

    return (
        <div>
            <div className="home">
                { error && <div> {error} </div> }
                {isPanding && <div> <h1>loading........ </h1></div>}
              { blogs && <BlogList blogs={blogs} title = "All Blog Here"/> }
            </div>
        </div>
    )
}

export default Home

// const handleDelete = (id) => {
//     const deleteBlog = blogs.filter(blog => blog.id !== id);
//     setData(deleteBlog);
// }



