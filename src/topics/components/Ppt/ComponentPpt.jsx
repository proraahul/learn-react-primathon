import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown.jsx/DropDown';
import './alert.css';
import './Tooltip.css';
import './table.css';
import './progressbar.css';

function Input(props) {
  console.log(props);
  return (
    <div>
      {props.label}
      <input type={props.type} value={props.value} name={props.name} />
    </div>
  )
}

function ParentComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Data', formData);

  }

  const handleInputChange = (event) => {
    const [name, value] = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <Input
        label='Name'
        type='text'
        name='name'
        value={formData.name}
        onChange={handleInputChange}
      />

      <Input
        label='Email'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleInputChange}
      />

      <button type='submit'>Submit</button>

    </form>
  )

}

// Alert - A component that displays an alert message to the user.
function Alert(props) {
  return (
    <div className={`alert alert-${props.type}`}>
      {props.message}
    </div>
  )
}

// Tooltip - A component that displays a tooltip with additional information when the user hovers over a certain element.

function Tooltip(props) {
  return (
    <span className="tooltip">
      {props.children}
      <span className="tooltipText">{props.text}</span>
    </span>);
}

function Table({ data }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
        {
          data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

const data = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
];


// Progress Bar
function ProgressBar({ value, max }) {
  const percentage = Math.floor((value / max) * 100);
  return (
    <div className="progress-bar">
      <div className="progress-bar__fill " style={{width: `${percentage}%`}}>
        {percentage}%
      </div>
    </div>
  );
}


const ComponentPpt = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  // progress Bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress +
        10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      {/* <ParentComponent /> */}
      {/* <h1>Dropdown Example</h1>
      <p>Selected option: {selectedOption}</p>
      <Dropdown options={options} onSelect={handleSelect} /> */}
      {/* <Alert 
      type='success'
      message='successfully Done'
      />
       <Alert 
      type='warning'
      message='Attention Warning'
      />
       <Alert 
      type='danger'
      message='Your Code have some error'
      /> */}

      {/* <Tooltip text='this is tooltip'>
        <button>Hover Me</button>
      </Tooltip> */}

      {/* <Table data={data}/> */}

      {/* <ProgressBar value={progress} max={100} /> */}

    </div>
  )
}

export default ComponentPpt