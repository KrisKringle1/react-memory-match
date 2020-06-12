import React, { useState } from 'react';

const Card = () => {
  const [isClicked, setIsClicked] = useState(false)

  let cardNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const cards = []

  function clickCard(e) {
    if (e.currentTarget.lastElementChild.className === 'outerCard not-hidden') {
      e.currentTarget.lastElementChild.className = 'outerCard hidden'
    }

    console.log(e.currentTarget.lastElementChild.className)

  }

  for (let i = 0; i < cardNumber.length; i++) {

    cards.push(
      <div key={i} className="cardContainer" onClick={clickCard}>
        <div className="outerCard not-hidden" >
          <div className="innerCard">
            {cardNumber[i]}
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
