import React, { useState, useEffect } from 'react'
import Board from './components/board'

import initializeData from './helpers/getData'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeData())
  }, [])

  const sameCardClickedTwice = (id) => flipped.includes(id)

  const isAMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.item === clickedCard.item
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const handleClick = (id) => {
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped(flipped => [...flipped, id])
      setDisabled(false)
    } else {
      if (sameCardClickedTwice(flipped, id)) return
      setFlipped(flipped => [...flipped, id])
      if (isAMatch(id)) {
        setSolved([...solved, ...flipped, id])
        resetCards()
      } else {
        setTimeout(resetCards, 1000)
      }
    }
  }

  return (
    <div>
      <Board
        cards={cards}
        flipped={flipped}
        solved={solved}
        handleClick={handleClick}
        disabled={disabled}
      />
    </div>
  )
}
