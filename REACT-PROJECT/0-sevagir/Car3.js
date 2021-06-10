import React from "react"
class Foo extends React.Component{
    //ete constructor kunena partadir tal props ev iran ev superin
    constructor(props) {
        super(props);
        //state@ obj e
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
    render(){
        return (
            <div>
                <h1>This is Foo component.</h1>
                <p>My name is {this.props.name}</p>
                <p>I make in {this.props.year}</p>
                <hr/>
                <div style={{backgroundColor: "red"}}>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {this.state.model} from {this.state.year}.
                </p>
                </div>
                <button  type="button" onClick={this.changeColor}>Change color</button>
            </div>
        )
    }
}
class Call  extends React.Component{
    render(){
        let obj={
            name:"Ford",
            year:"2000"
        };
        return(
            <div>
                <h1>This is a Call class component, includes </h1>
                <Foo name="Lexuse" year="2020"/>
                <Foo name="BMW" year="2010"/>
                <Foo name={obj.name} year={obj.year}/>
            </div>
        )
    }
}
export default Call