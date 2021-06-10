import './index.css';
// import Car from './Car';
import Ford from './Ford';
import ToDoList1 from "./ToDoList1";
import Car1 from "./Car1"
import Car2 from "./Car2"
import Clock from "./Clock"
import Header from "./Header";
import Red from "./Red";
import ChangeColor  from "./ChangeCol";
import Blue from "./Blue";
import Shouldupdate from "./Shouldupdate";
import Favcolor from "./Favcolor";
import Snapshot from "./Snapshot";
import CompDidUpdate from "./ComDidUpdate";
import Container from "./Container";
import Cars from "./Cars"
import  Call from "./Car3"
import * as serviceWorker from './serviceWorker';
import ToDoList from "./ToDO/ToDoList";
// import Clock from "./Clock";
 serviceWorker.unregister();

//Hello, Josh Perez. I'm 31
/*const name = 'Josh Perez';
let age = 2020-1989;
const element = <h1>Hello, {name}. I'm {age}</h1>;*/

//Hello, John Perez!
/*function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'John',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);*/


/*const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;//user? Hello, Harper Perez!
    }
    return <h1>Hello, Stranger.</h1>; //!user? Hello, Stranger.
}
const element = (
    <h1>
        {getGreeting(user)}
    </h1>
);*/

//Hello!
// Good to see Jhon here.
/*
let user = {
    firstName: "Jhon"
};

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see {user.firstName} here.</h2>
    </div>
);
*/


/*const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;*/

/*const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);*/

/*const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello Ann, world!'
);*/

/*const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};*/

//Rendering element
/*const element = <h1>Hello, world</h1>;

ReactDOM.render(
  <React.StrictMode>
    {/!*<App />*!/}

      {element}
      {/!*{getGreeting()}*!/}

      </React.StrictMode>,
  document.getElementById('root')
);*/


/*const element = <h1>Hello...., world</h1>;
ReactDOM.render(
    element,
    document.getElementById('root')
);*/

/*function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/



/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
*/

/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/

//veranayel????????????????????????????????????????????????//
/*
function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};
ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('root')
);
*/

/*
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
*/

/*
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock  />,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

*/

/*class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hello Worllllllld!</h1>
            </div>
        );
    }
}*/
/*const myelement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);*/

/*const myelement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);*/


/*const myelement = (
    <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
    </div>
);*/


// const myelement = <input type="text" />;

/*class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}*/

/*function Car() {
    return <h2>Hi, I am also a Car!</h2>;
}*/

/*class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <>
            <h1>Hello Viki</h1>
            <h2>I am a {this.state.color} Car!</h2>
        </>;
    }
}*/

/*class Car extends React.Component {
    render() {
        return <h2>I am a Car!</h2>;
    }
}

class Garage extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}*/

/*class Car extends React.Component {
    render() {
        return (<>
            <h2>My nmae is : {this.props.brand.name} and my model is :
                {this.props.brand.model}!</h2>
            </>)
    }
}

class Garage extends React.Component {
    render() {
        const who="your";
        const carinfo = {name: "Ford", model: "Mustang"};

        return (
            <div>
                <h1>Who lives in {who} garage?</h1>
                <Car brand={carinfo} />
            </div>
        );
    }
}*/

/*class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>I am a Car!</h2>;
    }
}*/

/*class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color},
                    {this.state.model},
                     from {this.state.year}.
                </p>
            </div>
        );
    }
}*/

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    };
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}
/* <div>

    </div>,*/
//ex1     CarsApp()
// function CarsApp(){
//     return(
//         <div>
//             <Cars name="Hondai" year = "2018"/>
//             <Cars name="Mersedes" year = "2015"/>
//             <Cars name="Lexus" year = "2020"/>
//         </div>
//     )
// }


const CarsApp = (
    <div>
        <Cars name="Hondai" year = "2018"/>
        <Cars name="Mersedes" year = "2015"/>
        <Cars name="Lexus" year = "2020"/>
    </div>
);
//      <ToDoList1 />
//          <Clock />
//         <Container />
//         <CompDidUpdate />
//         <Snapshot />
//         <Favcolor />
//         <Shouldupdate />
//         <Blue favcol="darkBlue"/>
//         <ChangeColor />
//         <Red  favcol="yellow" />
//         <Car />
//         <Header />
//         <Call />
//         {CarsApp}
//         <Car2 name ="Mersedes"/>
//         <Car1 />