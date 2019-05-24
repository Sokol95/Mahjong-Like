import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export default function Card({
  handleClick,
  flipped,
  solved,
  id,
  item,
  disabled,
}) {
  const onClickCard = () => disabled ? null : handleClick(id)
  return (
    <div
      className={`flip-container ${flipped ? 'flipped' : ''} ${solved ? 'solved' : ''}`}
      onClick={onClickCard}
    >
      <div className='flipper'>
        <span
          className={flipped ? 'front' : 'back'}
        >
          {flipped || solved ? item : '#'}
        </span>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}
