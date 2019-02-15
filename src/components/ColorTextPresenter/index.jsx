import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ColorTextPresenter = ({
  colorTextBlocksLists,
  text
}) => (
  <blockquote className="color-text-presenter">
    {colorTextBlocksLists.map(
      ({color, textBlocks}) => (textBlocks || []).map(
        ({selectionStart, selectionEnd}) => <>
          <mark style={{backgroundColor: color}}>
            {text.slice(selectionStart, selectionEnd)}
          </mark>
          <br/>
        </>
      )
    )}
  </blockquote>
);

export const ColorTextPresenterPropTypes = {
  colorTextBlocksLists: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      textBlocks: PropTypes.arrayOf(PropTypes.shape({
        selectionStart: PropTypes.number,
        selectionEnd: PropTypes.number
      }))
    })
  ),
  text: PropTypes.string
}

ColorTextPresenter.propTypes = ColorTextPresenterPropTypes

ColorTextPresenter.defaultProps = {
  colorTextBlocksLists: []
}

export default ColorTextPresenter