
import './App.css'
import Greeting from './core-concepts/Components/Greeting'
import EventHandling from './core-concepts/EventHandlinfg/Eventhandling'
import Porexamples from './core-concepts/props/prposexamples'
import { Statexample } from './core-concepts/State/state'


function App() {
 

  // return <Greeting />
  // return <Porexamples title="Welcome to react course"  age ="24"/>
  // return (<Porexamples title="Welcome to react course"  age ="24"/>,<Statexample />)
  return (
    <EventHandling />
  )
    
}

export default App
