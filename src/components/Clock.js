import React from 'react';
import Button from './Button';

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
      this.state = { date: new Date(), locale: 'bn-BD' };
     /*  this.handleClick = this.handleClick.bind(this); */
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
  
  handleClick= (locale)=> {
   /*  e.preventDefault(); */
    console.log('the button was clicked')
    this.setState({
     /*  locale:'en-US' */
      locale
    })
  }
  render() {
    

    console.log('component render')
    const { date,locale } = this.state;
    return (
      <div>
        <h1 className='heading'>
        <span className='text'>Hello  {date.toLocaleTimeString(locale)} </span>
        <img src="" alt="" />
      </h1>
      <Button  change={this.handleClick} locale="en-US" >Click here</Button>
      </div>

    );
  }
}
export default Clock;