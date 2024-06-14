import { useState } from "react";
import "./App.css";
import Tours from "./Components/Tours";
import data  from "./data";

function App() {

  const[tours, setTours] = useState(data);

  function removetour(id){
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  if(tours.length === 0){
    return(
      <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={() => setTours(data)}>
            Refresh
          </button>
      </div>
    )
  }


  return (
   <div className="app">
     
      <Tours tours = {tours} removetour={removetour}></Tours>
   </div>
  );
}

export default App;
