import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ColorBox,{ColorBoxPropTypes} from 'components/ColorBox'
import './index.scss'

const colorBoxIsHighlightedUpdater = (i, multipleSelections) => (colorBox, j) => ({
  ...colorBox,
  isHighlighted: multipleSelections 
    ? (i === j ? !colorBox.isHighlighted : colorBox.isHighlighted)
    : i === j
})

const InteractiveColorBoxRow = ({
  colorBoxes, onSelectedColorRow, descriptionText, multipleSelections
}) => {
  const [currentColorBoxes, updateColorBoxes] = useState(colorBoxes)
  
  useEffect(() => onSelectedColorRow(currentColorBoxes.filter(
    colorBox => colorBox.isHighlighted
  ).map(
    colorBox => colorBox.background
  )),
    currentColorBoxes
  )

  return (
    <ul className="interactive-color-box-row">
      {currentColorBoxes.map((props, i) => {
        return <li key={props.background} className="item"
          onClick={() => updateColorBoxes(currentColorBoxes.map(
            colorBoxIsHighlightedUpdater(i, multipleSelections)
          ))}>
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
  descriptionText: PropTypes.string,
  multipleSelections: PropTypes.bool
}

InteractiveColorBoxRow.propTypes = InteractiveColorBoxRowPropTypes

InteractiveColorBoxRow.defaultProps = {
  colorBoxes: [],
  onSelectedColorRow: () => {},
  descriptionText: '',
  multipleSelections: false
}

export default InteractiveColorBoxRow