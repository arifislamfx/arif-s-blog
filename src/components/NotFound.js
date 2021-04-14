import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="not__found">
            <h2>Oppsssss!</h2>
            <p>That page cannot found.</p>
            <Link to="/">Back to Homepage..</Link>
        </div>
    )
}

export default NotFound
