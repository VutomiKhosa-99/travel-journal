# Welcome to my travel journal

### [Live Website](https://travel-journal-2.netlify.app/)

## Introduction

This is a solo project I created a part of the Scrimba Frontend Development Path.
In this project I make use of props to render the content on the page that I export from data.js

```
import data from "./data"

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
        {cards}
    </div>
  )
}

export default App;

```

Setup:

- run `npm install && npm run dev `

## Want to connect with me?

### Connect with me on [LinkedIn](https://www.linkedin.com/in/vutomi-luigi-khosa)

Enjoy!
