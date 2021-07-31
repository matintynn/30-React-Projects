import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('Sina');
    const [isPending, setIsPending] = useState(false);
    // use useHistory hook to redirect user to home page
    const history = useHistory();

    const submitHandle = (e) => {
        e.preventDefault();
        const blog = { title, content, author };
        setIsPending(true);
        // use setTimeout to see/check if the loading button is workiing :)
        setTimeout(() => {
            fetch("http://localhost:8000/blogs", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setIsPending(false);
                // this is used to go back to the previour page
                // history.go(-1)
                // redirect to the desired page
                history.push("/");
            })
        }, 1000)
    }

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={submitHandle}>
                <label>Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Content:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Sina">Sina</option>
                    <option value="Majid">Majid</option>
                </select>
                {!isPending && <button className="btn">Add blog</button>}
                {isPending && <button disabled className="btn">Adding ...</button>}
            </form>
        </div>
    );
}

export default Create;

/**
 * Viewers, here are a few features you can add:
1. User Authentication using Firebase (The Net Ninja has tutorials on it!)
2. Make the 404 error page look good by adding SVGs, etc.
3. Only Admins can delete a blog.
4. Allow users to add images to the blog.
5. Make a REAL API! (It will be a ton of fun!)
 */