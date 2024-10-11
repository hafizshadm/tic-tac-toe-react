import Player from "./components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Ali" symbol="X" />
          <Player name="Ahsan" symbol="O" />
        </ol>
        Gameboard
      </div>
      Log
    </main>
  )
}

export default App
