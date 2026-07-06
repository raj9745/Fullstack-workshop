import SayHello from "./sayHello";

const App = () => {
  // const myDiv = React.createElement("div", {}, [
  //   React.createElement("h1", { class: "anjanaClass" }, "Hello world"),

  //   React.createElement(SayHello, { name: "raj" }),
  //   React.createElement(SayHello, { name: "milan" }),
  //   React.createElement(SayHello, { name: "nimral" }),
  // ]);

  // return myDiv;
  let persons = [
    {firstName:"raj", lastName:"Tiruwa",id:201},
    {firstName:"milan", lastName:"Rai",id:202},
    {firstName:"nirmal", lastName:"shrestha",id:203},
  ]
  return (
    <>
      <h1 className="raj">Hello world</h1>
     {
  Array.isArray(persons) && persons.length > 0 ? (
    persons
      .filter((person) => person.id > 201)
      .map((person) => (
        <SayHello
          key={person.id}
          person={person}
        />
      ))
  ) : (
    <p>No persons found.</p>
  )
}
      
      {/* <SayHello name="raj" />
      <SayHello name="milan" />
      <SayHello name="nirmal" /> */}
    </>
  );
};


export default App;


