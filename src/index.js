import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const index = 0;

function Clock({locale}) {
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
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock locale="bn-BD" />
    
    <Welcome/>
  </React.StrictMode>
);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
