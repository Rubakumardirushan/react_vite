
import './App.css'
import Greeting from './core-concepts/Components/Greeting'
import Porexamples from './core-concepts/props/prposexamples'
import { Statexample } from './core-concepts/State/state'


function App() {
 

  // return <Greeting />
  // return <Porexamples title="Welcome to react course"  age ="24"/>
  return (<Porexamples title="Welcome to react course"  age ="24"/>,<Statexample />)
    
}

export default App
