import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ColorTextPresenter = ({
  colorTextItemsLists
}) => (
  <blockquote className="color-text-presenter">
    {colorTextItemsLists.map(
      ({color, textItems}) => (textItems || []).map(textItem => <>
        <mark style={{backgroundColor: color}}>{textItem}</mark><br/><br/>
      </>)
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