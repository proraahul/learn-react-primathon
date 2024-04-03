import React, { useContext, useState, useRef, useEffect } from 'react'
import ChangeColor from './assignments/ChangeColor'
import Form from './assignments/Form'
import InputFocus from './assignments/InputFocus'
import ScrollToTop from './assignments/ScrollToTop'
import Timer from './assignments/Timer'
import ValueCompare from './assignments/ValueCompare'

const UseRefDrive = () => {

  function ValueIncrementer() {
    const valueRef = useRef(0);
    const [value, setValue] = useState(0);
    const incrementValue = () => {
      valueRef.current++;
      setValue(valueRef.current);
    };

    return (
      <div>
        <p>Value: {value}</p>
        <button onClick={incrementValue}>Increment</button>
      </div>
    )
  }

  const ArrayManipulator = () => {
    const arrayRef = useRef([]);
    const [array, setArray] = useState(['item']);
    const addItem = () => {
      arrayRef.current.push('New Item');
    };
    setArray([...array, ...arrayRef.current]);
    return (
      <div>
        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>Add Item</button>
      </div>
    );
  }

  function VideoPlayer() {
    const videoRef = useRef(null);

    const playVideo = () => {
      videoRef.current.play();
    };

    const pauseVideo = () => {
      videoRef.current.pause();
    }

    const stopVideo = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    return (
      <div>
        <video src="" ref={videoRef}></video>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={stopVideo}>Stop</button>
      </div>
    )
  }

  function Dropdown() {
    const selectRef = useRef(null);

    const selectOption = () => {
      selectRef.current.value = 'option2';
    };

    return (
      <div className='border p-5 m-5'>
        <select ref={selectRef} className='m-2'>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button onClick={selectOption} className='bg-teal-600 p-2 rounded'>Select Option 2</button>
      </div>
    );
  }

  function DraggableElement() {
    const elementRef = useRef(null);

    useEffect(() => {
      const element = elementRef.current; 
      let isDragging = false;
      let offset = { x: 0, y: 0 };

      const handleMouseDown = (event) => {
        isDragging = true;
        offset = {
          x: event.clientX - element.getBoundingClientRect().left,
          y: event.clientY - element.getBoundingClientRect().top,
        };
      };

      const handleMouseMove = (event) => {
        if (!isDragging) return;
        element.style.left = `${event.clientX - offset.x}px`;
        element.style.top = `${event.clientY - offset.y}px`;
      };

      const handleMouseUp = () => {
        isDragging = false;
      }

      element.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        element.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, []);

    return <div ref={elementRef} style={{
      width: '100px', height: '100px', background: 'red', position:
        'absolute'
    }} />
  }

  

  return (
    <div className='p-3 m-5 '>
      <h1 className='font-bold text-lg'>Use Ref Drive</h1>
      {/* <InputFocus /> */}
      {/* <Form /> */}
      {/* <Timer /> */}
      {/* <ScrollToTop /> */}
      {/* <ValueCompare /> */}
      {/* <ChangeColor /> */}
      {/* <ValueIncrementer /> */}
      {/* <ArrayManipulator /> */}
      {/* <VideoPlayer /> */}
      {/* <Dropdown /> */}
      <DraggableElement />

    </div>
  )
}

export default UseRefDrive