import React from "react";
class Shouldupdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
    }
    shouldComponentUpdate() {
        //defalt true arjeq@ kpoxi
        return false;
    }
    changeColor = () => {
        this.setState({favoritecolor: "blue"});
    };
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.favoritecolor}</h1>
                <button type="button" onClick={this.changeColor}>Should Update</button>
            </div>
        );
    }
}
export default Shouldupdate