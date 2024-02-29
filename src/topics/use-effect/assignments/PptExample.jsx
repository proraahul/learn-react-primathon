import React, { useEffect, useState } from 'react'



const PptExample = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Effect ran!');
  // }, [count]);

  // cleanUp Function
  function MyComponent() {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //   function handleClick() {
    //     setCount((prevCount) => prevCount + 1);
    //   }
    //   document.addEventListener('click', handleClick); 
    //   return () => {
    //     document.removeEventListener('click', handleClick);
    //   };
    // }, []);

    useEffect(() => {
      document.title = `Count: ${count}`;
    }, [count]);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment Title</button>
      </div>
    );
  }

  // Build a timer component using React and useEffect. The component should start a timer when it mounts and display the elapsed time :
  function Timer() {
    const [second, setSecond] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSecond(prevSec => prevSec + 1);
      }, 1000);

      return () => clearInterval(interval);

    }, []);


    return (
      <div>
        Seconds: {second}
      </div>
    )
  }

  // Construct a React form component that uses the useEffect hook to validate form inputs in real-time. Display error messages if the input is invalid
  function FormComponent() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
      if (inputValue.length < 5) {
        setError('Input must be at least 5 characters long');
      } else if (inputValue === '@' || inputValue === '.' || !inputValue) {
        setError('Invalid username')
      } else {
        setError('');
      }
    }, [inputValue]);

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          className='border'
        />
        {error && <p>{error}</p>} </div>
    );
  }

  // Implement a React component that uses the useEffect hook to track the window size. Display the current dimensions of the window on the page, updating them whenever the window is resized.
  function WindowSizeTracker() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize)

    }, []);

    return (
      <div>
        <p>Window Width: {windowSize.width}</p>
        <p>Window Height: {windowSize.height}</p>
      </div>
    );
  }

  // Build a React component that fetches and displays random quotes using the useEffect hook. Include a button to fetch a new quote when clicked

  function QuoteComponent() {
    const [quote, setQuote] = useState([{}]);

    const category = 'happiness';
    const apiKey = 'KW2U96S7VfhPgKww4a3Xcg==4i1nsGEXbQvWZ48w';

    const fetchNewQuote = () => {
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data[0].quote);
          setQuote(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    useEffect(() => {
      fetchNewQuote()
    }, []);



    return (
      <div className='border p-5 m-10'>
        {
          quote ? quote.map((item, index) => {
            return (
              <div key={index} className='border p-2 m-5 w-[90vw] h-[30vh]'>
                <p className='underline'>Author: {item.author}</p>
                <h1 className="text-center text-xl font-bold text-teal-900">"{item.quote}"</h1>
              </div>
            )
          }) : <p>loading...</p>
        }

        <button onClick={fetchNewQuote} className="bg-teal-800 hover:bg-green-600 text-white font-bold p-2">Fetch New Quote </button>
      </div>
    )
  }

  // Create a React component that uses the useEffect hook to implement infinite scrolling. Load additional content when the user reaches the bottom of the page. 
  function InfiniteScroll() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
        const data = await response.json();
        setPosts(prevPosts => [...prevPosts, ...data]);
        setLoading(false);
      };

      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
          setPage(prevPage => prevPage + 1);
        }
      };

      window.addEventListener('scroll', handleScroll);

      fetchData();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page]);

    return (
      <div>
        <h1 className="font-bold text-white bg-teal-800 w-full p-4 text-2xl text-center fixed">Infinite Scrolling Project</h1>
        {
          posts.map((post, index) => (
            <div key={index}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        }
        {loading && <p>Loading...</p>}
      </div>
    );
  }

  // Develop a React component that utilizes the useEffect hook to persist data to local storage. Save and retrieve data from local storage when the component mounts and unmounts.
  function LocalStorageComponent() {
    const [data, setData] = useState('');

    useEffect(() => {
      const savedData = localStorage.getItem('data');
      if (savedData) {
        setData(savedData);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('data', data);
    }, [data]);

    return (
      <div>
        <input
          type="text"
          value={data}
          onChange={event => setData(event.target.value)}
          className='border'
        />
        <p>Saved Data: {data}</p> </div>
    );
  }


  // Implement a React component that uses the useEffect hook to track the user's geolocation. Display the user's current coordinates on the page.
  function GeolocationComponent() {
    const [coords, setCoords] = useState({ 
      lat: null, 
      long: null 
    });

    useEffect(() => {
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        // console.log(navigator.geolocation);
        // console.log(position);
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      })
     }
    }, []);
    return (
    <div>
        <p>Latitude: {coords.lat}</p>
        <p>Longitude: {coords.long}</p> 
      </div>
    );
  }



  return (
    <>
      {/* <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Increment Count
        </button>
      </div> */}

      <div>
        {/* <MyComponent />
        <Timer/>
        <FormComponent />
        <WindowSizeTracker />
        <QuoteComponent />
        <InfiniteScroll /> */}
        {/* <LocalStorageComponent /> */}
        <GeolocationComponent />
      </div>
    </>
  )
}

export default PptExample;