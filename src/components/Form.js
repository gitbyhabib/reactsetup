import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
    }

    state={
        title:'Javascript',
        areatext:'Javascript is awesome',
        selectval:'React',
        ischecked:true,
    }

    handleChange=(e)=>{
      if(e.target.type==='text'){
        this.setState({
            title:e.target.value,
        });
      }

      else if(e.target.type==='textarea'){
        this.setState({
            areatext:e.target.value,
        });
      }
      else if(e.target.type==='select-one'){
        this.setState({
            selectval:e.target.value,
        });
      }
      else if(e.target.type==='checkbox'){
        this.setState({
            ischecked:e.target.checked,
        });
      }
     
      else {
        console.log(e.target.type)
       /* console.log('Nothing Here'); */
      }

    }

    submitHandler=(e)=>{
        const {title,areatext,selectval,ischecked}=this.state
        e.preventDefault();
        console.log(title,areatext,selectval,ischecked)
      }
    render() {
        const {title,areatext,selectval,ischecked}=this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder='Enter Title' value={title} onChange={this.handleChange}/> <br /><br />

                <textarea name="text" placeholder='hhhh' value={areatext} onChange={this.handleChange}></textarea> <br /><br />
                <select value={selectval} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select> <br /><br />

                <input type="checkbox" checked={ischecked} onChange={this.handleChange} />
                <br /><br />

               {/*  <input type="text" value={null} /> */}

                <input type="Submit" value='Submit' className='btn btn-danger' />

           {/*      <p>{title}</p> */}
                {/* <p>{selectval}</p> */}
            
            </form>
        );
    }
}

export default Form;
