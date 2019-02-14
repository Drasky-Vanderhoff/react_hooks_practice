import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ColorBox = ({background, highlight, isHighlighted}) => {
  
  return (
    <div className={`color-box ${
      isHighlighted ? `highlighted`: `unhighlighted`
    }`} style={{backgroundColor: background, borderColor: highlight}} />
  )
}
export const ColorBoxPropTypes = {
  background: PropTypes.string,
  isHighlighted: PropTypes.bool
}

ColorBox.propTypes = ColorBoxPropTypes

ColorBox.defaultProps = {
  background: 'red',
  highlight: 'green',
  isHighlighted: false
}

export default ColorBox