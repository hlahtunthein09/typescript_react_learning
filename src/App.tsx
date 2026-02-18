import React from "react"
import Btn from "./components/Btn"
import Button from "./components/Button"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Container from "./components/Container"

const App = () => {

  const personName = {
    firstName: "Hla",
    lastName: "Htun"
  }

  const nameList = [
    {
      firstName: "Bruce",
      lastName: "Wayne"
    },
    {
      firstName: "Clark",
      lastName: "Kent"
    },
    {
      firstName: "Diana",
      lastName: "Prince"
    }
  ];

    const [inputValue, setInputValue] = React.useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value);
    }



  return (
    <div>
      <Button name="Hunter Zolomon" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names = {nameList} />

      <Status status="success" />

      {/* Children props types */}
      <Heading>Placeholder text</Heading>

      {/* React Component prompt */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>

      <Greet name = {"Hla Htun"} isLoggedIn={true}/>

      {/* function's types */}
      <Btn handleClick={(event, id) => console.log("Button clicked.", event, id)} />

      {/* onChange event */}
      <Input value={inputValue} handleChange={handleInputChange} />

      {/* Style types React.CSSProperties */}
      <Container styles = {{border : "1px solid black", padding: "1rem", display: "block"}} />
    </div>
  )
}

export default App