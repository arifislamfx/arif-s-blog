import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  
 const [blogs, setBlogs] = useState(null);
 const [isPanding, setPanding] = useState(true);

 const handleDelete = (id) => {
     const deleteBlog = blogs.filter(blog => blog.id !== id);
     setBlogs(deleteBlog);
 }

    useEffect(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.table(data);
                setBlogs(data)
                setPanding(false)
            });
    },[]);
    return (
        <div>
            <div className="home">
                {isPanding && <div> <h1>loading........ </h1></div>}
              { blogs && <BlogList blogs={blogs} title = "All Blog Here" handleDelete={handleDelete}/> }
            </div>
        </div>
    )
}

export default Home
