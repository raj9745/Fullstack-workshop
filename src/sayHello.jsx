import React from 'react';

const sayHello = (props)=>{
//   return React.createElement(
//     'p',
//     {},
//     `Hello ${props.name}`
// );

return (
  <p>Hello {props.name}</p>
)
}
export default sayHello;