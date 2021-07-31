import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h2 className="title">Sorry</h2>
            <p>That page cannot be found</p>
            <Link to='/'>Back to home ... </Link>
        </div>
    );
}

export default NotFoundPage;