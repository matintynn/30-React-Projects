import { Link } from "react-router-dom"

const Bloglist = ({ blogs }) => {
    // old way, this way we need to create variable
    // new way, just destructure the props object in the params
    // const blogs = props.blogs

    return (
        <div className="blog-list">
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <h2 className="title">
                        {blog.title}
                    </h2>
                    <p className="author">{blog.author}</p>
                    <p className="blog-content">{blog.content.slice(0, 250)}</p>
                    <Link className="read-more" to={`/blogs/${blog.id}`}>Read more</Link>
                </div>
            )}
        </div>
    );
}

export default Bloglist;