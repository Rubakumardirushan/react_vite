//funcational component
import "../../App.css";
function Greeting(){
   const name = "John Doe";
     return (
        <h1 style={{
         backgroundColor: "lightblue",
         fontSize: "24px",
         border: "2px solid black",
        }} >hello world {name}</h1>
     );
}

export default Greeting;


