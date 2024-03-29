import Person from './Person';

const Jsx_practice = () => {

    // Example 1 - Simple JSX element:
    const element = <h1>Hello Duniya!</h1>

    // Example 2 - Using variables in JSX:
    const name = 'Rahul';
    const element1 = <h1>Hello {name}</h1>

    // Example 3 - Rendering a list using map():
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    const element2 = <ul>{listItems}</ul>;

    // Example 4 - Using ternary operator in JSX:
    const isLoggedIn = false;
    const element3 = (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>);

    // Example 5 - Using spread attributes to pass props:
    const people = [
        { name: 'Rahul', age: 22 },
        { name: 'Raaj', age: 25 },
    ];
    const element4 = <Person data={people} title='student' />;

    // Example 6 - Using className instead of class in JSX:
    // const element5 = <div className="container"></div>;

    // Example 7 - Using inline styles in JSX:
    const style = {
        color: 'red',
        fontSize: '20px',
        //   padding: '0'
    };
    const element6 = <div style={style}>Hello</div>;

    // Example 8 - Using event handlers in JSX:
    function handleClick() {
        console.log('Button clicked');
        // alert('Clicked')
    }
    const element7 = <button onClick={handleClick}>Click me</button>

    // Example 9 - Using JSX in if statements:
    function Greeting(props) {
        if (props.isLoggedIn) {
            return <h1>Welcome back!</h1>;
        } else {
            return <h1>Please log in.</h1>;
        }
    }

    //Example 10 - Using JSX in for loops:
    // function List(item) {
    //     let length = item.length;
    //     var items = [];
    //     for (let i = 0; i < length; i++) {
    //         items.push(<li>{item[i]}</li>);
    //     }
    //     return <ul>{items}</ul>;
    // }
    // List([1, 2, 3, 4, 5]);

    // Example 11 - Using JSX in switch statements:
    function getMessage(type) {
        switch (type) {
            case 'success':
                return <div className="text-green-600 font-bold text-xl">Success!</div>;
            case 'error':
                return <div className="text-red-600 font-bold text-xl">Error!</div>;
            default:
                return <h1>Default</h1>;
        }
    }

    // Example 12 - Using JSX with React components: (Please define your own Header, Main and Footer component)
    function App() {
        return (
            <div> <Header /> <Main /> <Footer />
            </div>);
    }

    // Example 13 - Using props with JSX:
    function Welcome(props) {
        return <h1 className={props.className}>Hello, {props.name}!</h1>;
    }
    const element8 = <Welcome name="Rahul" className='border p-4 font-bold' />


    // Example 14 - Rendering a list of items with conditional rendering:
    function ListItem(props) {
        return <li>{props.value}</li>;
    }

    function NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) => (
            <ListItem key={number.toString()} value={number} />
        ));
        return <ul>{listItems}</ul>;
    }
    function Apps() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <div>
                <h1>Number List</h1>
                <NumberList numbers={numbers} />
            </div>);
    }

    // Example 15 - Rendering a table with dynamic data:
    function ProductTable(props) {
        const products = props.products;
        const rows = [];
        let lastCategory = null;
        products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(
                    <tr key={product.category}>
                        <th colSpan="2">{product.category}</th>
                    </tr>);
            }
            rows.push(
                <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
            lastCategory = product.category;
        });
        return (
            <center>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </center>
        );
    }

    const PRODUCTS = [
        { category: 'Sporting Goods', price: '$49.99', name: 'Football' },
        { category: 'Sporting Goods', price: '$9.99', name: 'Baseball' },
        { category: 'Electronics', price: '$99.99', name: 'iPod Touch' },
        { category: 'Electronics', price: '$399.99', name: 'No name' }
    ];

    // Example 16 - Conditional rendering using JSX:
    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting />;
        } else {
            return <GuestGreeting />;
        }
    }
    function UserGreeting() {
        return <h1>Welcome back!</h1>;
    }
    function GuestGreeting() {
        return <h1>Please sign up.</h1>;
    }

    // Example 17 -Using JSX with conditional CSS classes:
    function Button(props) {
        const buttonClass = props.isPrimary ? 'border p-3 text-green-700 font-bold' : 'border p-3 text-red-700 font-bold';
        return <button className={buttonClass}>{props.label}</button>;
    }

    // Example 18 - Using JSX with inline conditionals:
    function Notification(props) {
        return (
            <div className='font-semibold text-red-600'>
                {props.hasMessage && <p>{props.message}</p>}
                {!props.hasMessage && <p>No new notifications.</p>}
            </div>);
    }

    // Example 19 - Using JSX with fragments:
    function App() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }

    // Example 20 - Using JSX with arrays:
    function List(props) {
        const newItems = props.items.map((item, index) => {
            return (
                <li key={index} className='border p-2 mb-1'>Item : {item}</li>
            )
        })
        return <ul>{newItems}</ul>;
    }
    const Number = [1, 2, 3, 4, 5];

    // Example 21 - Using JSX with functions:

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    const user = {
        firstName: 'Rahul',
        lastName: 'Saini'
    };
    const element21 = <h1 className='border p-2 text-green-700 font-semibold'>Hello, {formatName(user)}!</h1>;

    // Example 22 - Using JSX with custom components:

    function Welcome(props) {
        return <h1>Hello, {props.name}!</h1>;
    }
    function App() {
        return (
            <div>
                <Welcome name="John" />
                <Welcome name="Jane" />
                <Welcome name="Bob" />
            </div>);
    }

    return (
        <div>
            {/* {element4} */}
            {/* {element6} */}
            {/* {element7} */}
            {/* {Greeting({isLoggedIn:false})} */}
            {/* {List([1, 2, 3, 4, 5])} */}
            {/* {getMessage('success')} */}
            {/* {Apps()} */}
            {/* <ProductTable products={PRODUCTS} /> */}
            {/* <Greeting isLoggedIn={true} /> */}
            {/* <Button isPrimary={false} label='Click Me!' /> */}
            {/* <Notification hasMessage={true} message='New Message' /> */}
            {/* <List items={Number} /> */}
            {/* {element21} */}
            <App />

        </div>
    )
}


export default Jsx_practice