import SayHello from "./sayHello";

const App = () => {
  // const myDiv = React.createElement("div", {}, [
  //   React.createElement("h1", { class: "anjanaClass" }, "Hello world"),

  //   React.createElement(SayHello, { name: "raj" }),
  //   React.createElement(SayHello, { name: "milan" }),
  //   React.createElement(SayHello, { name: "nimral" }),
  // ]);

  // return myDiv;
  return (
    <>
      <h1 className="raj">Hello world</h1>
      <SayHello name="raj" />
      <SayHello name="milan" />
      <SayHello name="nirmal" />
    </>
  );
};


export default App;


