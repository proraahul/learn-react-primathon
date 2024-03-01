import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';


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
      if (navigator.geolocation) {
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

  // Implement a React component that uses the useEffect hook to debounce user input. Delay the execution of a search function until the user has finished typing.
  function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');

    const searchFunction = term => {
      console.log('You are searching for', term);
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        searchFunction(searchTerm)
      }, 500);

      return () => clearTimeout(timer);
    }, [searchTerm]);



    return (
      <div>
        <label htmlFor="">Search:
          <input type="text" className='border' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </label>
      </div>
    )
  }

  // Create a React component that uses the useEffect hook to fetch data and update a chart library (e.g., Chart.js) with the fetched data.
  const ChartComponent = () => {
    const [userData, setUserData] = useState([]);
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch data from JSONPlaceholder API
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          // Aggregate data to count number of posts made by each user
          const userCounts = data.reduce((counts, post) => {
            // console.log(counts);
            // console.log(post);
            counts[post.userId] = (counts[post.userId] || 0) + 1;
            return counts;
          }, {});
          // Transform aggregated data into an array of objects
          const userDataArray = Object.entries(userCounts).map(([userId, count]) => ({
            userId: parseInt(userId),
            count
          }));
          setUserData(userDataArray);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, []);

    useEffect(() => {
      if (userData.length > 0) {
        if (chartInstance) {
          chartInstance.destroy(); // Destroy existing chart instance
        }
        const ctx = document.getElementById('myChart');
        const newChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: userData.map(entry => entry.userId),
            datasets: [{
              label: 'Number of Posts',
              data: userData.map(entry => entry.count),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        setChartInstance(newChartInstance);
      }
    }, [userData]);

    return (
      <div className='w-[40vh]'>
        <h2>User Post Count Chart</h2>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  };

  // Build a React component that uses the useEffect hook to fetch data from an API and implement pagination. Allow the user to navigate between pages and display the current page number

  function PaginationComponent() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      const fetchData = () => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`)
          .then(response => response.json())
          .then(data => setData(data));
        console.log(data);
      };
      fetchData();
    }, [page]);
    return (
      <div className='m-5 p-3 border'>
        <h1 className='font-bold text-center text-2xl'>PAGINATION</h1>
        {data.map(item => <p key={item.id} className='p-1 underline text-red-700'>{item.name}</p>)}
        <button className='border p-2 font-bold' onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1}>Previous Page</button> <span className='font-bold text-teal-900'>Page {page}</span>
        <button className='border p-2 font-bold' onClick={() => setPage(prevPage => prevPage + 1)}>Next Page</button>
      </div>);
  }

  // Develop a React component that uses the useEffect hook to perform a certain action after a specified delay (e.g., displaying a notification after 5 seconds).
  function DelayedActionComponent() {

    useEffect(() => {

      var timer = setTimeout(() => {
        console.log("print after 5 seconds");
      }, 5000);


      return () => {
        clearTimeout(timer)
      };
    }, []);

    return (
      <div>Component</div>
    )
  }

  // Implement a React component that uses the useEffect hook to track the user's online/offline status. Display a message indicating the user's current status.
  function OnlineStatusComponent() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }


    }, []);
    return (
      <div>
        {isOnline ? 'Online' : 'Offline'}
      </div>
    )
  }

  // Create a React component that uses the useEffect hook to fetch and display data from a paginated API. Load and display more data when the user reaches the bottom of the page.
  function PaginationDataComponent() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
      const fetchData = () => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=80`)
          .then(response => response.json())
          .then(resData => {
            // console.log(resData);
            setData(resData);
          });
      }
      fetchData();
    }, [page]);

    useEffect(() => {

      const handleScroll = () => {
        if (window.innerWidth + window.screenY >= document.body.offsetHeight) {
          setPage(prevPage => prevPage + 1);
        }
      };

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }, []);




    return (
      <div>
        {data.map((item) => {
          return (
            <p key={item.id}>{item.name}</p>
          )
        })}
      </div>
    )

  }

  // Build a React component that uses the useEffect hook to fetch and display random images from an API. Fetch a new image every 5 seconds.

  function RandomImageComponent() {
    const [imgData, setImgData] = useState('');

    const getImg = () => {
      const fetchImg = fetch('https://random.imagecdn.app/500/150');

      fetchImg
      .then(response => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('error', error));

      return fetchImg;

    }

    useEffect(() => {
      const timer = setInterval(() => {
        getImg();
      }, 1000);

      return () => clearInterval(timer);

    }, []);



    return (
<>
      {/* {
        imgData.map((item) => {
          return(
            <div key={item.id}>
              <img src={item.url} alt={item.url} />
            </div>
          )
        })
       } */}
</>
    )
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
        {/* <MyComponent /> */}
        {/* <Timer/> */}
        {/* <FormComponent /> */}
        {/* <WindowSizeTracker /> */}
        {/* <QuoteComponent /> */}
        {/* <InfiniteScroll /> */}
        {/* <LocalStorageComponent /> */}
        {/* <GeolocationComponent /> */}
        {/* <SearchComponent /> */}
        {/* <ChartComponent /> */}
        {/* <PaginationComponent /> */}
        {/* <DelayedActionComponent   /> */}
        {/* <OnlineStatusComponent /> */}
        {/* <PaginationDataComponent /> */}
        {/* <RandomImageComponent /> */}
      </div>
    </>
  )
}

export default PptExample;