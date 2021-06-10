import React from "react"
class Car2 extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "red",
            year: 1092
        };
    }
    render() {
        return (
            <div>
                <h2>I am a {this.state.color} Car!</h2>
                <p>I make in {this.state.year}</p>

                <p>My name is {this.props.name}</p>
                <hr/>
            </div>)
    }
}
export default Car2