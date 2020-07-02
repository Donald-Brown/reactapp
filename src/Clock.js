import React from 'react';
import FormatDate from './FormatDate';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 
      1000
    );
  }

  componentDidUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return (
      <div>
        <h2>Component Clock</h2>
        <FormatDate date={this.state.date} test="Just trying something" />
      </div>
    );
  }
}

export default Clock;