import { useEffect, useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  
 const [blogs, setBlogs] = useState(null);
 const [isPanding, setPanding] = useState(true);
 const [error, setError] = useState(null);

 const handleDelete = (id) => {
     const deleteBlog = blogs.filter(blog => blog.id !== id);
     setBlogs(deleteBlog);
 }

    useEffect(() => {
        setTimeout(()=> {
            fetch('http://localhost:8000/blogs')
            .then(res => {
               if(!res.ok){
                  throw Error('could not find fetch');
               }
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setPanding(false) 
                setError(null);
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message);
                setPanding(false)
            })
        }, 1000)
           
    },[]);
    return (
        <div>
            <div className="home">
                { error && <div> {error} </div> }
                {isPanding && <div> <h1>loading........ </h1></div>}
              { blogs && <BlogList blogs={blogs} title = "All Blog Here" handleDelete={handleDelete}/> }
            </div>
        </div>
    )
}

export default Home
