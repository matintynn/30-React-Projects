/**
 * Create custom hook, which here is useFetch
 * note: the custom hook name needs to start with "use"..
 */
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // use external async func, note: async returns a promise, remmember pass argument url
    const fetchData = async (url, abortCont) => {
        // put argument url to fetch
        const res = await fetch(url, { signal: abortCont.signal });
        /**
         *  check if the resource is not exist, not ok, we throw Error
         *  if we dont do this, when the url is mistyped, it will cause error
         *  so we need to throw an error
         * */
        if (!res.ok) {
            throw Error("The resource can not be fetched");
        }
        // get json data if there is no error
        const data = await res.json();
        setData(data);
        // when we got data, setIsPending to false to remove the loading state
        setIsPending(false);
        /**
         * set Error to null if after error, we correct the url, so it will
         * change the state of error, which removes the error message
         *  */
        setError(null)
    }

    // we use useEffect() to fetch data from server when the page is loaded,
    // we also use useEffect dependencies []
    useEffect(() => {
        // Add cleanup, when we routing fast between page, this clean the fetching data time
        // bc when we move to another page, the data is still being fetched in the previour page
        // this AbortController() will control the fetching
        const abortCont = new AbortController()
        // call the func to fetch data
        // fetchData(); => without setTimeout, this realworld func
        // use setTimeOut to simulate the real world when we fetch data aross the internet
        // noted: don't do setTimeout() in the real world
        setTimeout(() => {
            // *** need to pass the url argument from useFetch(url)
            fetchData(url, abortCont)
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        // this catch will catch the error due to the connection/ network
                        setError(err.message)
                        // set the loading state to null bc no need to load
                        setIsPending(false);
                    }
                });
        }, 800);
        // abort the fetch
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch