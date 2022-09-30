import { useState } from 'react';
import './App.css';

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState(0);

  function laske(e){
    e.preventDefault();
    const tulos = weight / (height * height);
    //setBMI = tulos;
    setBMI(tulos)
  }

  return (
    <div>
      <div>
        <h1>Calculating body mass index</h1>
      </div>
      <form onSubmit={laske} >
        <div>
          <label>Height</label>
          <input value={height} onChange={e => setHeight(e.target.value)}/>
        </div>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <output>{bmi.toFixed(2)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
