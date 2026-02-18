import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"

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
  ]

  return (
    <div>
      <Greet name="Hunter Zolomon" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names = {nameList} />

      <Status status="success" />

      {/* Children props types */}
      <Heading>Placeholder text</Heading>

      {/* React Component prompt */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  )
}

export default App