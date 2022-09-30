import { useState } from 'react';
import './App.css';

function App() {

  const [age, setage] = useState(0);
  const [upper, setUpper] = useState(0)
  const [lower, setLower] = useState(0)

  function laske(e){
    e.preventDefault();

    const tulos1 = (220-age) *0.85;
    const tulos2 = (220-age) *0.65;

    setUpper(tulos1)
    setLower(tulos2)
  }

  return (
    <div>
      <div>
        <h1>Heart rate limits alculate</h1>
      </div>
      <form onSubmit={laske} >
        <div>
          <label>age</label>
        </div>
          <input value={age} onChange={e => setage(e.target.value)}/>
        <div>
          <output>{lower.toFixed(0)}-{upper.toFixed(0)}</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
