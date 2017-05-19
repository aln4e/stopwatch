//This is what it looked like before we added Flux

import React, { Component } from 'react';
import './App.css';

//extend means we're building the class App to the Component class
class App extends Component {
  constructor(){
    //super is so we can use functions that are in the Component class
    super()
    //this.state is an object and we can assign the initial properties and values within it when you first load the page
    this.state={
      time: ["0:30","0:45","9:00"]
    }
  }

//a. we create a method to push a new time into the array of this.state
//b. the handleClick will push a new element into the array and setState will set the new state to our new array and triggers the render.
  handleClick(){
    this.state.time.push("new time!")
    this.setState({time: this.state.time});
  }

//what we want to show on the browser
  render() {
    //we created a variable called TIMES which will map through the array (this.state.time) and will return a div for each element of the array.
        var TIMES = this.state.time.map(function(time, index){
          return (
            <div>
              {time}
            </div>
          )}
        );
    //This return renders what will show on the screen. The variable TIMES will render along with the button. bind(this) says to go to the top of the component and work its way down to the handleClick method.
      return (
        <div>
          {TIMES}
          <button onClick={this.handleClick.bind(this)} type="button"> Record Time </button>
        </div>
      )
  }
}
//the name of our class
// export default App;
