import { useState, useEffect } from "react";

const BasicFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    //   useEffect(() => {
    //     console.log("useEffect");

    //     const getDataPromise = fetch("https://api.github.com/users");

    //     console.log("getDataPromise", getDataPromise);

    //     getDataPromise
    //       .then((response) => {
    //         console.log("response", response);
    //         return response.json();
    //       })
    //       .then((data) => {
    //         console.log("data", data);
    //         setData(data);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.log("error", error);
    //       });
    //   }, []);

    //   useEffect(() => {
    //     const getData = async () => {
    //       console.log("useEffect");

    //       const response = await fetch("https://api.github.com/users");
    //       const data = await response.json();
    //       console.log("data", data);
    //       setData(data);
    //       setLoading(false);
    //     };

    //     getData();
    //   }, []);

    const URL = 'https://jsonplaceholder.typicode.com/posts';
    useEffect(() => {
        const dataFromFetch = fetch(URL)
        dataFromFetch.then((res) => {
            // console.log(res.json())
            return res.json();
        })
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error', err);
            })
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Basic Fetch</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default BasicFetch;

// Home work
// Plese use this url to get data
// - https://jsonplaceholder.typicode.com/posts
