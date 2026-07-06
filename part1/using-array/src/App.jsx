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
    {firstName: "raj", lastName: "shrestha", id :201},
    {firstName: "milan", lastName: "Rai", id :202},
    {firstName: "nirmal", lastName: "shrestha", id :203},
  ]
  // let a = "React Learning";
  // whenever working with array we should use key, espcially whenever we are calling another component in react

  return (
    <>
      <h1 className="raj">Hello world</h1>
      {
        Array.isArray(persons) && persons.length > 0 ?(
          persons.filter(element=> element.id>201).map((person)=>(
        <SayHello person = {person} key = {person.id} />
      ))
        ):
        (
          <p>No data found</p>
        )
      }
      
      {/* <SayHello name="raj" />
      <SayHello name="milan" />
      <SayHello name="nirmal" /> */}
    </>
  );
};


export default App;



