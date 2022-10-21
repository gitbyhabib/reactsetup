import React from 'react';
/* function Clock({locale}) {
 return (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Hello {new Date().toLocaleTimeString(locale)} </span>
    <img src="" alt="" />
  </h1>
)
}

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
} */
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date:new Date()};

    }
    componentDidMount(){
        this.clocktimer =  setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.clocktimer);

    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
  render (){
    return (
      <h1 className='heading'>
        <span className='text'>Hello  {this.state.date.toLocaleTimeString(this.props.locale)} </span>
        <img src="" alt="" />
      </h1>
    );
  }
}
export default Clock;