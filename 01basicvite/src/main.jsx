import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const reactElement = {
  type: "a",
  props: {
    href: "https://reactjs.org",
    target: "_blank",
    children: "Click me to visit React app",
  },
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    Visit React app
  </a>
);

 const areactElement = React.createElement( 
  'a' , 
  { href: 'https://github.com/vivi2004',target: "_blank"} ,
   'Click  me on Github'
 )
// Fixing the root element creation and rendering logic
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
   <h1> Welcome to My Custom React App </h1>
    { areactElement}
    <App />
    </div>
 
  </React.StrictMode>
);
