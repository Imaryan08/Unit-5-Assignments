import React from 'react'
import {} from './App.css'

function App() {
  const [Score,setScore] = React.useState(0)
  function scoreIncrement(value)
  {
    setScore(Score+value)
  }
  const [wicket , setWicket] = React.useState(0)
  function wicketIncrement(value)
  {
    setWicket(wicket+value)
  }
  const [over,setOver] = React.useState(0.0)
  function overIncrement(value)
  {
    setOver(over+value)

  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              <h3>{Score}</h3>
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              <h3>{wicket}</h3>
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              <h3>{over}</h3>
            }
          </h1>
        </div>
      </div>
      
      <div className='container'>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>scoreIncrement(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>scoreIncrement(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>scoreIncrement(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>wicketIncrement(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>overIncrement(0.1)}> Add 1</button>
      </div>

      </div>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;