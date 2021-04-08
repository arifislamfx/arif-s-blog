import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  
 const [blogs, setBlogs] = useState([
     {title: 'My new website', body: 'This is my brand new website', author: 'Ariful islam', id: 1},
     {title: 'My Hobby', body: 'Coding is my passion', author: 'Ariful islam', id: 2},
     {title: 'My new house', body: 'This is my brand new house', author: 'Sumi islam', id: 3},
     {title: 'My new laptop', body: 'This is my brand new laptop', author: 'Aysha', id: 4},
     {title: 'My new Mobile', body: 'This is my brand new mobile', author: 'Aysha', id: 5}
 ]);

 const handleDelete = (id) => {
     const deleteBlog = blogs.filter(blog => blog.id !== id);
     setBlogs(deleteBlog);
 }
    

    return (
        <div>
            <div className="home">
              <BlogList blogs={blogs} title = "All Blog Here" handleDelete={handleDelete} />

              {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Ariful islam')} title = "Ariful's Blog Here" handleDelete={handleDelete} />
              <BlogList blogs={blogs.filter((blog) => blog.author === 'Aysha')} title = "Aysha's Blog" handleDelete={handleDelete} /> */}
            </div>
        </div>
    )
}

export default Home
