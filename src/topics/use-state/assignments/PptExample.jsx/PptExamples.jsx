import React, { useState } from 'react';
import './accordion.css'
import './navigation.css';
import './dragDrop.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const PptExamples = () => {

    //1. Toggling a button's state:
    function Button() {
        const [isOn, setIsOn] = useState(false);
        const handleClick = () => {
            setIsOn(!isOn);
        };

        const style = {
            backgroundColor: isOn ? 'red' : 'green',
            color: isOn ? 'white' : 'black'
        }

        return (
            <div className='flex items-center border p-5 m-5'>
                <h1 className='font-bold text-4xl'>1. Toggle Button: </h1>
                <button onClick={handleClick} className='border rounded p-3 m-5 font-bold' style={style}>
                    {isOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }

    //2. Displaying a list of items:
    function Items() {
        const listItem = ['Apple', 'Banna', 'Barry', 'Cherry'];
        const [listItems, setlistItems] = useState(listItem);
        const [newItem, setNewItem] = useState('');

        const handleAddItem = (e) => {
            setlistItems([...listItems, newItem]);
            setNewItem('')
        }
        const handleChange = (e) => {
            const value = e.target.value;
            console.log(value);
            setNewItem(value);
        }
        return (
            <div className='border rounded p-4 m-6'>
                <h1 className='font-bold text-2xl m-3 text-fuchsia-900'>2. Add Your Items:</h1>
                <ol className='flex flex-col p-4 m-6 justify-center'>
                    {
                        listItems.map((item, index) => {
                            return (
                                <li key={index} className='list-disc m-2'>{item}</li>
                            )
                        })
                    }
                    <input type="text" onChange={handleChange} className='border mt-2 p-1 outline-none' value={newItem} />
                    <button onClick={handleAddItem} className='border p-2 w-[100px] mt-2 bg-fuchsia-900 font-semibold text-white'>Add item</button>
                </ol>
            </div>
        )
    }

    //3. Updating a form input:
    function Form() {
        const [inputValue, setInputValue] = useState()
        const handleOnChange = (e) => {
            setInputValue(e.target.value);
        }
        const handleSubmitForm = (e) => {
            e.preventDefault();
            console.log('Form Submitted Value: ', inputValue);
            setInputValue('')
        }

        return (
            <>

                <form onSubmit={handleSubmitForm} className='border rounded m-20 p-20 flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-xl text-teal-900 text-left w-full'>3. Form Input</h1>
                    <label className='font-semibold'>Enter some text:</label>
                    <input type="text" onChange={handleOnChange} value={inputValue} className='border rounded' />

                    <button type='submit' className='border rounded w-[100px] mt-3 bg-green-800 p-2 font-bold text-black'>Submit</button>
                    <p>{inputValue}</p>
                </form>
            </>
        )
    }

    //4. Counter
    function Counter() {
        const [counter, setCounter] = useState(0);

        const handleIncremenet = () => {
            setCounter(counter + 1)
        }
        const handleDecrement = () => {
            setCounter(counter - 1)
        }

        return (
            <div className='border m-5 p-5'>
                <h1 className='text-xl font-bold mb-4 text-teal-600'>4. Counter App:</h1>
                <h1 className='text-4xl'>{counter}</h1>
                <button onClick={handleIncremenet} className='border p-2 m-1'>Increment</button>
                <button onClick={handleDecrement} className='border p-2'>Decrement</button>
            </div>
        )
    }

    //5. Form input:
    function FormInput() {
        const [inputValue, setInputValue] = useState('');
        const handleChange = (e) => {
            setInputValue(e.target.value);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            // Do something with the input value, such as submit it to a server
            console.log('Input Value :', inputValue);
        };
        return (
            <form onSubmit={handleSubmit}>
                <h1>Form Input</h1>
                <label>
                    Enter some text:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
                <p>{inputValue}</p>
            </form>
        );
    }

    //5. Todo list:
    function TodoList() {
        const list = [
            { id: 1, text: 'Walk the dog', completed: false },
            { id: 2, text: 'Buy groceries', completed: true },
            { id: 3, text: 'Do laundry', completed: false },
        ];
        const [todos, setTodos] = useState(list);
        const [todoInput, setTodoInput] = useState('');

        const addTodoItem = () => {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 100),
                text: todoInput,
                completed: false,
            }]);
            setTodoInput('');
        }

        const handleTodoChange = (e) => {
            const value = e.target.value;
            setTodoInput(value);
            // setTodos(todoInput)
        }

        const removeTodoItem = (index) => {
            const newTodo = todos.filter(item => item.id !== index);
            setTodos(newTodo);
        }

        const handleDoneTask = (id) => {
            const newTodoList = todos.map(todo => {
                if(todo.id === id)
                    return { ...todo, completed: !todo.completed };
                else
                    return todo;
            })
            setTodos(newTodoList);
        };

        return (
            <div className='border p-5 m-10 flex flex-col justify-center '>
                <h1 className='font-bold text-2xl text-center text-teal-800 w-full'>5. Add Your Todos:</h1>
                <div className='flex m-2 justify-center items-center gap-6'>
                    <input type="text" onChange={handleTodoChange} className='border rounded w-[60%] p-2' value={todoInput} />
                    <button className='p-2 border rounded bg-teal-800 font-semibold w-[100px] text-white' onClick={addTodoItem}>Add Todo</button>
                </div>

                <ul className='p-5'>
                    {
                        todos.map((item) => {
                            return (
                                <div className='flex justify-between items-center w-[50%] m-auto' key={item.id} >
                                    <input type="checkbox" checked={item.completed} onChange={() => handleDoneTask(item.id)} />
                                    <span className='list-disc p-2' style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
                                    <button className='border p-2 m-1 hover:text-white hover:bg-gray-500 transition duration-300' onClick={() => removeTodoItem(item.id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    //6. Dropdown menu:
    function DropDown() {
        const [selected, setSelected] = useState('')
        const handleSelectOption = (e) => {
            const OptionValue = e.target.value;
            setSelected(OptionValue);
        }
        return (
            <div className='border p-5 m-5'>
                <h1 className='font-bold text-xl text-red-600 mb-3'>6. Dropdown</h1>
                <label className="font-bold">Select Any Option:
                    <select value={selected} onChange={handleSelectOption}>
                        <option value="">Select Your State</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Utter Pradesh">Utter Pradesh</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Aasam">Aasam</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Haryana">Haryana</option>
                    </select>
                </label>
                <p className='mt-3 text-teal-600 font-semibold'>Selected Option: {selected}</p>
            </div>
        )
    }

    //7. Modal: Store the open/closed state of a modal window to control its visibility.
    function Modal() {
        const [isOpen, setIsOpen] = useState(false);
        const handleOpen = () => {
            setIsOpen(!isOpen);
        };
        // const handleClose = () => {
        //     setIsOpen(false);
        // };
        return (
            <div className='m-10 p-10 border'>
                <h1 className='text-xl font-bold mb-4 text-gray-600'>7. Modal Example</h1>
                <button onClick={handleOpen} className='border p-2 m-5'>{isOpen ? 'Close' : 'Open'}</button>
                {isOpen && (
                    <div className="">
                        <div>
                            <div className="p-5 m-5">
                                <img src="https://images.pexels.com/photos/36372/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="husky" width={'500px'} />
                                <h2 className='font-semibold text-2xl text-teal-800'>Husky Dog Breed</h2>
                                <p className='text-justify'>
                                    The Siberian Husky is a remarkable breed known for its striking appearance, endurance, and friendly demeanor. Originating from northeastern Siberia, these dogs were bred by the Chukchi people for sledding, herding reindeer, and as family companions. Huskies are medium-sized, athletic dogs with distinctive features including erect ears, a thick double coat, and captivating eyes that can be blue, brown, or a combination.

                                    Renowned for their endurance and stamina, Siberian Huskies have a strong work ethic and excel in activities like mushing, skijoring, and agility trials. They possess a friendly and outgoing personality, often displaying affection towards their human companions and even strangers, making them poor guard dogs but excellent family pets.

                                    Due to their strong prey drive and instinct to roam, Huskies require secure containment and regular exercise to prevent boredom and destructive behavior. They thrive in environments with cold weather but can adapt to various climates with proper care.

                                    The Siberian Husky's intelligence, loyalty, and striking appearance have made them a beloved breed worldwide, popular both as working dogs in sled races and as cherished pets in households around the globe.



                                </p>
                                {/* <button onClick={handleClose} className='border p-2 my-5'>Close</button> */}
                            </div> </div>
                    </div>
                )}
            </div>
        )
    }

    //8. Accordion: Store the open/closed state of sections to control their visibility    
    function Accordion() {
        const [isOpen, setIsOpen] = useState(false);
        const handleToggle = () => {
            setIsOpen(!isOpen);
        };
        return (
            <div className="accordion m-10 p-10 border">
                <h1 className='text-xl font-bold mb-3'>8. Accordion Example</h1>
                <div className="accordion-header" onClick={handleToggle}>
                    <h3 className="accordion-title">Accordion (Tap to Open)</h3>
                    <span className={`accordion-icon ${isOpen ? 'open' : ''}`}></span>
                </div>
                {
                    isOpen && (
                        <div className="accordion-content">
                            <p>This is the content of the accordion.</p>
                        </div>)
                }
            </div>);
    }

    //9. Color picker: Store the selected color in state to update the color of other elements.
    function ColorPicker() {
        const [selectedColor, setSelectedColor] = useState('blue');

        const handleSelectedColor = (e) => {
            setSelectedColor(e.target.value);
        }

        return (
            <div className='m-10 p-5 flex flex-col justify-center items-center h-96 border'>
                <h1 className='font-bold text-rose-950 text-xl mb-5 w-full text-left'>9. Colour Picker Project</h1>
                <label className='font-bold text-xl '>Enter Color:</label>
                <input type="text" className='border m-3 p-1 outline-none' value={selectedColor} onChange={handleSelectedColor} />

                <div className='w-[400px] h-96' style={{ backgroundColor: `${selectedColor}` }}>

                </div>
                <p className='font-semibold' style={{ color: `${selectedColor}` }}>Selected Color: {selectedColor}</p>
            </div>

        )
    }

    //10. Checkbox: Store the checked/unchecked state of a checkbox to perform actions based on it.
    function Checkbox() {
        const [isChecked, setIsChecked] = useState(false)
        const handleCheckboxToggle = () => {
            setIsChecked(!isChecked);
        }

        return (
            <div className='border m-10 p-10'>
                <h1 className='font-bold text-xl mb-3 text-orange-400'>10. CheckBox</h1>
                <label className="flex border p-2">
                    <input type="checkbox" value={isChecked} onChange={handleCheckboxToggle} />
                    <span className='ml-2' style={{ display: isChecked ? 'none' : 'block' }}>Checkbox Label</span>
                </label>
            </div>
        )
    }

    //11. Radio buttons: Store the selected option in state to render the appropriate content.
    function RadioButton() {
        const [radio, setRadio] = useState('')

        const handleRadioButton = (e) => {
            setRadio(e.target.value);
        }

        return (
            <div className='border m-10 p-10 flex justify-around'>
                <h1 className='font-bold text-xl mb-3 text-orange-800'>11. Radio Button</h1>
                <label className='flex justify-center items-center gap-2'>
                    <input type="radio" value='option1' checked={radio === 'option1'} onChange={handleRadioButton} />
                    <span style={{
                        backgroundColor: radio === 'option1' ? 'blue' : '',
                        padding: radio === 'option1' ? '4px' : ''
                    }}>Option 1</span>
                </label>
                <label className='flex justify-center items-center gap-2'>
                    <input type="radio" value='option2' checked={radio === 'option2'} onChange={handleRadioButton} />
                    <span style={{
                        backgroundColor: radio === 'option2' ? 'blue' : '',
                        padding: radio === 'option2' ? '4px' : ''
                    }}>Option 2</span>
                </label>
                <label className='flex justify-center items-center gap-2'>
                    <input type="radio" value='option3' checked={radio === 'option3'} onChange={handleRadioButton} />
                    <span style={{
                        backgroundColor: radio === 'option3' ? 'blue' : '',
                        padding: radio === 'option3' ? '4px' : ''
                    }}>Option 3</span>
                </label>
            </div>
        )
    }

    //12. Navigation menu: Store the active page in state to highlight the current page.
    function NavigationMenu() {
        const [navMenu, setNavMenu] = useState(false);

        const handleNavigationToggle = () => {
            setNavMenu(!navMenu);
        };

        return (
            <nav className='border m-10 p-10'>
                <h1 className='font-bold text-xl text-teal-600 mb-5'>12. Hamburg Toggle Icon</h1>
                <div className='menu-toggle' onClick={handleNavigationToggle}>
                    <span className={`menu-icon`}></span>
                </div>
                {
                    navMenu && (
                        <ul className='ml-4 mt-0 flex flex-col gap-3'>
                            <li><a href="home">Home </a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="service">Service</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>)
                }
            </nav>
        )
    }

    //14. Image carousel: Store the index of the currently displayed image in state to cycle through images.
    function ImageCarousel() {
        const [currentImage, setCurrentImage] = useState(0);

        const prevImage = () => {
            setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        };
        const nextImage = () => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        };

        const images = [
            'https://images.pexels.com/photos/6530739/pexels-photo-6530739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/11191307/pexels-photo-11191307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/14885685/pexels-photo-14885685.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/705075/pexels-photo-705075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        ];

        return (
            <div className="relative border m-10 p-10">
                <h1 className='font-bold text-2xl text-yellow-950 w-full text-left'>13. Image Carousel</h1>
                <button className="p-3 bg-black text-white inline-block absolute top-[50%] left-[300px] hover:text-black hover:bg-gray-400" onClick={prevImage}> &#10094;
                </button>
                <img
                    className="w-[40%] h-[40%] m-auto"
                    src={images[currentImage]}
                    alt="Carousel Image"
                />
                <button className="p-3 bg-black text-white inline-block absolute top-[50%] right-[300px] hover:text-black hover:bg-gray-400" onClick={nextImage}>
                    &#10095;
                </button> </div>
        );

    }

    // 15. Calendar
    const CalenderComp = () => {
        const [value, setValue] = useState(new Date());
        const [selectedDate, setSelectedDate] = useState(new Date());
      
      
        const onChange = (e) => {
          setSelectedDate(e.target);
        }
      
          return (
            <>
              <div className="flex flex-col justify-center items-center border p-10 m-10">
                <h1 className="text-2xl font-bold text-teal-900 w-full text-left">14. Calender</h1>
                <Calendar value={value} onChange={onChange} className='bg-green-800 font-bold text-lg w-[600px]' />
              </div>
            </>
          )
        }




    return (
        <div>
            <Button />
            <Items />
            <Form />
            <Counter />
            <FormInput />
            <TodoList />
            <DropDown />
            <Modal />
            <Accordion />
            <ColorPicker />
            <Checkbox />
            <RadioButton />
            <NavigationMenu />
            <ImageCarousel />
            <CalenderComp />
        </div>
    )
}

export default PptExamples