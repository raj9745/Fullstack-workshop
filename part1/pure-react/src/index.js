const react = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(react);

const sayHello = (props)=>{
   return React.createElement('h1', {className: 'raj'},`Hello ${props.name}`);
}

const App = ()=>{
    const myDiv = React.createElement('div',{},[
        React.createElement('h1', {className: 'raj'},'Hello Raj'),
        
        React.createElement(sayHello, {name: 'Nirmal'}),
        React.createElement(sayHello, {name: 'Ramesh'}),
        React.createElement(sayHello, {name: 'Suresh'}),
    ])
     return myDiv;
} 

reactRoot.render(React.createElement(App));