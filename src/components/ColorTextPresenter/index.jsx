import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ColorTextPresenter = ({
  colorTextItemsLists
}) => (
  <blockquote className="color-text-presenter">
    {colorTextItemsLists.map(
      ({color, textItems}) => textItems.map(
        text => <>
          <mark style={{backgroundColor: color}}>
            {text}
          </mark>
          <br/>
        </>
      )
    )}
  </blockquote>
);

export const ColorTextPresenterPropTypes = {
  colorTextItemsLists: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      textItems: PropTypes.arrayOf(PropTypes.string)
    })
  )
}

ColorTextPresenter.propTypes = ColorTextPresenterPropTypes

ColorTextPresenter.defaultProps = {
  colorTextItemsLists: []
}

export default ColorTextPresenter