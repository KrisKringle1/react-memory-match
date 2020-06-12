import React, { useState } from 'react';

const Card = () => {
  const [isClicked, setIsClicked] = useState(false)

  let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const cards = []

  function clickCard(e) {
    setIsClicked(!isClicked)
    console.log(e.target.className)
    if (isClicked) {
      e.target.className = "hidden"

    }

    if (!isClicked) {
      e.target.className = "outerCard"
    }
  }

  for (let i = 0; i < cardNumber.length; i++) {

    cards.push(
      <div key={i} className="cardContainer" onClick={clickCard}>{cardNumber[i]}
        <div className="outerCard">
          <div className="innerCard">
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {cards}

    </div>
  )
}


export default Card
