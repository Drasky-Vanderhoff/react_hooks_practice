import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ColorBox,{ColorBoxPropTypes} from 'components/ColorBox'
import './index.scss'

const InteractiveColorBoxRow = ({colorBoxes, onSelectedColorRow, descriptionText}) => {
  const [currentColorBoxes, updateColorBoxes] = useState(colorBoxes)
  
  return (
    <ul className="interactive-color-box-row">
      {currentColorBoxes.map((props, i) => {
        return <li key={props.background} className="item"
          onClick={() => {
            onSelectedColorRow(props.background)
            updateColorBoxes(currentColorBoxes.map(
              (colorBox, j) => ({...colorBox, isHighlighted: i === j}) 
            ))
          }}>
          <ColorBox {...props} />
        </li>
      })}
      <li>{descriptionText}</li>
    </ul>
  )
}

export const InteractiveColorBoxRowPropTypes = {
  colorBoxes: PropTypes.arrayOf(PropTypes.shape(ColorBoxPropTypes)),
  onSelectedColorRow: PropTypes.func,
  descriptionText: PropTypes.string
}

InteractiveColorBoxRow.propTypes = InteractiveColorBoxRowPropTypes

InteractiveColorBoxRow.defaultProps = {
  colorBoxes: [],
  onSelectedColorRow: () => {},
  descriptionText: ''
}

export default InteractiveColorBoxRow