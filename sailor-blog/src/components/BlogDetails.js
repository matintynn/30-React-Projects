import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    // use react hook useParams, this allows to grab parameter from the route (url)
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch("http://localhost:3000/blogs/" + id);
    const history = useHistory();

    const deleteHandle = () => {
        console.log("hi")
        fetch("http://localhost:3000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2 className="title">{blog.title}</h2>
                    <p className="author">{blog.author}</p>
                    <p className="blog-content">{blog.content}</p>
                    <button onClick={deleteHandle} className="delete">Delete post</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;