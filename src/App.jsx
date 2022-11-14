import NavBar from "./components/NavBar"
import Card from "./components/Card"
import data from './data'
import './App.scss'

function App() {
  const cards = data.map(card => {
    return (
      <Card key={card.id}
            {...card}
       />
    )
  })

  return (
    <div className="App">
        <NavBar />
        {cards}
    </div>
  )
}

export default App
