import React from "react"

class App extends React.Component {
    render() {
       return (
          <div>
             <ReactCSSTransitionGroup transitionName = "example"
                transitionAppear = {true} transitionAppearTimeout = {500}
                transitionEnter = {false} transitionLeave = {false}>
                     
                <h1>
                   <div>
                      <img src = "arrow" alt= "arrow"/>
                   </div>
                </h1>
             </ReactCSSTransitionGroup>
          </div>      
       );
    }
 }
 export default App;