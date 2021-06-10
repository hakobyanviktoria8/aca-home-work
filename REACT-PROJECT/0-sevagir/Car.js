import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    render() {
        return (
            <>
                <h2>Hi, I am a Car!</h2>
                <p>I'm {this.props.brand}</p>
            </>
        )

    }
}

export default Car;