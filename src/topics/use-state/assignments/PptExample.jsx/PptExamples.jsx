import { list } from 'postcss';
import React, { useState } from 'react';

const PptExamples = () => {

    // 1. Toggling a button's state:
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
            <button onClick={handleClick} className='border rounded p-3 m-5 font-bold' style={style}>
                {isOn ? 'ON' : 'OFF'}
            </button>);
    }

    // 2. Displaying a list of items:
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
            <div>
                <h1 className='font-bold text-2xl m-3 text-fuchsia-900'>Add Your Items:</h1>
                <ol className='flex flex-col border rounded p-4 m-6 justify-center'>
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


    // 3. Updating a form input:
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
            <form onSubmit={handleSubmitForm} className='border rounded m-20 p-20 flex flex-col justify-center items-center'>
                <input type="text" onChange={handleOnChange} value={inputValue} className='border rounded' />
                <button type='submit' className='border rounded w-[100px] mt-3 bg-green-800 p-2 font-bold text-black'>Submit</button>
            </form>
        )
    }


    // 4. Todo list:
    function TodoList() {
        const list = [
            { id: 1, text: 'Walk the dog', completed: false },
            { id: 2, text: 'Buy groceries', completed: true },
            { id: 3, text: 'Do laundry', completed: false },
        ]
        const [todos, setTodos] = useState(list);
        const [todoInput, setTodoInput] = useState('');
        const [doneTask, setDoneTask] = useState(false);

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

        const handleDoneTask = (index) => {
            setDoneTask(prevTasks =>
                prevTasks.map((task, i) => {
                    return(
                    i === index ? { ...task, completed: !task.completed } : task
                  )})
            )};

        const style = { textDecoration: doneTask?  'line-through' : 'none' }

        return (
            <div className='border p-5 m-5 flex flex-col justify-center '>
                <h1 className='font-bold text-2xl text-center text-teal-800'>Add Your Todos:</h1>
                <div className='flex m-2 justify-center items-center gap-6'>
                    <input type="text" onChange={handleTodoChange} className='border rounded w-[60%] p-2' value={todoInput} />
                    <button className='p-2 border rounded bg-teal-800 font-semibold w-[100px] text-white' onClick={addTodoItem}>Add Todo</button>
                </div>

                <ul className='p-5'>
                    {
                        todos.map((item) => {
                            return (
                                <div className='flex justify-between items-center w-[50%] m-auto' key={item.id} >
                                    <input type="checkbox" checked={doneTask} onChange={() => handleDoneTask(item.id)} />
                                    <li className='list-disc p-2' style={style}>{item.text}</li>
                                    <button className='border p-2 m-1 hover:text-white hover:bg-gray-500 transition duration-300' onClick={() => removeTodoItem(item.id)}>Remove</button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }




    return (
        <div>
            {/* <Button /> */}
            {/* <Items /> */}
            {/* <Form /> */}
            <TodoList />
        </div>
    )
}

export default PptExamples