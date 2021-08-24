import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    // data: blogs, means call data = blogs, kind of change the name
    const { data: blogs, isPending, error } = useFetch("http://localhost:3000/blogs")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* check of loading is true or false */}
            {isPending && <div className="loading">Loading ... </div>}
            {/* we pass the props(blogs={blogs}) to the child component 
            So the child component can use the data from the parent.
            Also, we can pass a function as a props, so when the user click delete
            btn, the function in Home will be fired*/}
            {/* blogs && this is conditional checking, if the blogs is
            null(means false, so we stop there, if not it will pass the null
            value from useState to props the causes error) */}
            {blogs && <Bloglist blogs={blogs} />}
        </div>
    );
}

export default Home;