import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);

  const submit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/feedback`, { name, rating });
    alert("Feedback submitted!");
  };

  return (
    <div>
      <h1>KauFeedback</h1>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="number" placeholder="Rating" onChange={e => setRating(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;

