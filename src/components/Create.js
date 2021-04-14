import { useState } from 'react';
import { useHistory } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('arif');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false)
        })
        history.push('/')
    }

    return (
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                 type="text"
                 required
                 value = {title}
                 onChange = {(e) => setTitle(e.target.value)}
                 />
                 <label>Blog body:</label>
                <textarea 
                cols="30" rows="8"
                required 
                value = {body}
                 onChange = {(e) => setBody(e.target.value)}
                ></textarea> 
                <label>Blog author:</label>
            <select 
             value = {author}
             onChange = {(e) => setAuthor(e.target.value)}
            >
                <option value="arif">arif</option>
                <option value="sumi">sumi</option>
                <option value="unknown-user">Unknown User</option>
            </select>
            {!isPending && <button> <i class="fas fa-plus"></i> Add Blog</button>}
            {isPending && <button disabled> <i class="fas fa-plus"></i> Adding Blog...</button>}
            </form>
        </div>
    )
}

export default Create
