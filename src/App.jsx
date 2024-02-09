import { useState } from "react"
import "./App.css"



const App = () => {
  const [imgUrl, setUrl] = useState("");

  const handleImage = () =>{
      fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then(data => setUrl(data[0].url))
  }



  return (
    <div className="container">
      <div className="box">
        <h1>Random cat</h1> <br />
        <img src={imgUrl} alt="cat" />  <br />
        <button onClick={handleImage}>Click</button> <br />

      </div>

    </div>
  )
}

export default App
