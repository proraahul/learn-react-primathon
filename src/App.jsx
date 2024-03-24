// import ComponentsDriver from "./topics/components/index.jsx"
// import Movies from "./topics/props/assignments/movies.jsx"
// import Table from "./topics/table/table.jsx"
// import Counter from "./topics/use-state/assignments/counter.jsx"
// import Sakshi from "./topics/use-state/assignments/Sakshi.jsx";
// import ModelWindow from "./topics/use-state/assignments/ModelWindow.jsx";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Breadcrumbs from "./topics/Router/Breadcrumbs.jsx";
// import DataList from "./topics/Pagination/DataList.jsx";
// import Accordion from "./topics/Accordion/Accordion.jsx";
// import SearchBar from "./topics/SearchBar/SearchBar.jsx";
// import Rating from "./topics/Rating/Rating.jsx";
import { useState } from "react";
// import ProgressBarComponent from "./topics/components/ProgresBar/ProgressBarComponent";
// import Menu from "./topics/components/Menu/Menu.jsx";
// import Stepper from './topics/components/stepper/Stepper.jsx';
// import Tabs from "./topics/components/Tabs/Tabs";
// import Jsx_practice from "./topics/JSX/Jsx_practice.jsx";
// import ValentineCard from "./valentine/ValentineCard.jsx";
// import ComponentPpt from "./topics/components/Ppt/ComponentPpt.jsx";
// import Carousel from "./topics/use-state/assignments/Carousel.jsx";
// import CalenderComponent from "./topics/components/Ppt/Calender/Calender.jsx";
// import Calendar from "./topics/components/Ppt/Calender/Calender.jsx";
import UseStateDrive from '../src/topics/use-state/index'
import ComponentsDriver from "./topics/components";
import PropsDriver from "./topics/props";
import UseEffectDrive from "./topics/use-effect";
import PropsStateTogetherDriver from "./topics/props-state";
import UseContextDrive from "./topics/use-context/UseContextDrive";
import UseRefDrive from "./topics/use-ref";
import UseReducerDrive from "./topics/use-reducer";
import FormDrive from "./topics/FormDrive/FormDrive";
import CreatePostForm from "./topics/FormDrive/CreatePostForm";
import { Route, Routes } from "react-router-dom";
import Posts from "./topics/Posts";
import EditPost from "./topics/Posts/EditPost";
import CreatePost from "./topics/Posts/CreatePost";
import AuthAppDrive from "./topics/use-context/auth/AuthApp";

const Home = () => <div>Home</div>;
const Category = () => <div>Category</div>;
const Product = () => <div>Product</div>;



const App = () => {

  // Rating:
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
    // Do something with the new rating, like sending it to a server or updating state.
  };


  //! Accordion
  const sections = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    { title: 'Section 3', content: 'Content for Section 3' },
  ];

  const sampleData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
  ];

  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
  }

  const data = [
    {
      title: 'item 1',
      description: 'description 1',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'item 2',
      description: 'description 2',
      image: 'https://images.pexels.com/photos/9183718/pexels-photo-9183718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'item 3',
      description: 'description 3',
      image: 'https://images.pexels.com/photos/584327/pexels-photo-584327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ];


  const [selectDate, setSelectDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectDate(date);
  }

  const tabs = [
    { title: 'Tab 1', content: <div>This is Tab 1 content</div> },
    { title: 'Tab 2', content: <div>This is Tab 2 content</div> },
    { title: 'Tab 3', content: <div>This is Tab 3 content</div> },
  ];

  const steps = [
    { name: 'Step 1', content: <div>This is Step 1 content</div> },
    { name: 'Step 2', content: <div>This is Step 2 content</div> },
    { name: 'Step 3', content: <div>This is Step 3 content</div> },
  ];


  //* Menu Example: 
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    // Do something with the selected option
  };

  const Home = () => {
    return (
      <h1>Hello , I am Home</h1>
    )
  }

  return (
    <>

{/* <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/posts" element={<Posts />}/>
  <Route path="/posts/:postId/edit" element={<EditPost />}/>
  <Route path="/posts/create" element={<CreatePost />}/>
</Routes> */}

      {/* <ComponentsDriver /> */}
      {/* <UseStateDrive /> */}
      {/* <PropsDriver /> */}
      {/* <PropsStateTogetherDriver /> */}
      {/* <UseEffectDrive /> */}
      <UseContextDrive />
      {/* <UseRefDrive /> */}
      {/* <UseReducerDrive /> */}
      {/* <FormDrive /> */}
      {/* <CreatePostForm /> */}
      {/*  <AuthAppDrive /> */}

    </>
  )
}

export default App




{/* <div>
    <CalenderComp />
</div> */}
{/* <UseEffectDrive /> */ }


{/* <h1>Menu Example</h1>
      <Menu options={options} onSelect={handleSelect} />
      {selectedOption && <p>Selected Option: {selectedOption}</p>} */}

{/* <ProgressBarComponent />  */ }

      //  <div><Stepper steps={steps}/></div>

    // <div>
    //   <CalenderComponent onDateChange={handleDateChange}/>
    //   <div className="selected-date">{selectDate.toDateString()}</div>
    // </div>
    // <div>
    //   <Tabs tabs={tabs}/>
    // </div>

    // <div>
    //   {/* <Movies /> */}
    //   {/* <ComponentsDriver /> */}
    //   {/* <Counter /> */}
    //   {/* <Sakshi /> */}
    //   {/* <ModelWindow /> */}
    // </div>

    // <Router>
    //   <div>
    //     <Breadcrumbs
    //       paths={[
    //         { label: 'Home', url: '/' },
    //         { label: 'Category', url: '/category' },
    //         { label: 'Product' },
    //       ]}
    //     />
    //     <Routes>
    //       <Route path="/" exact component={Home} />
    //       <Route path="/category" exact component={Category} />
    //       <Route path="/category/:productId" component={Product} />
    //     </Routes>
    //   </div>
    // </Router>
    // <DataList data={sampleData}/>

    // <div>
    //   <h1>Accordion Example</h1>
    //   <Accordion sections={sections} />
    // </div>

    // <div>
    //   <h1>Search Item</h1>
    //   <SearchBar onSearch={handleSearch}/>
    // </div>


    // <Counter />

    // <Rating />

    // <div>
    //   <h1>Rate Something</h1>
    //   <Rating maxStars={5} initialRating={userRating} onRatingChange={handleRatingChange} />
    //   <p>User Rating: {userRating}</p>
    // </div>

    // <Jsx_practice />
    // <ComponentPpt />

    // <div>
    //   <h1>React Carousel Example</h1>
    //   <Carousel data={data} />
    // </div>

    // <ModelWindow buttonText1='Click To Open' buttonText2='Click to Close' />

