import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ColorTextPresenter = ({
  colorTextItems
}) => (
  <blockquote className="color-text-presenter">
    {Object.keys(colorTextItems).map(
      color => (colorTextItems[color] || []).map(
        textItem => <>
          <mark style={{backgroundColor: color}}>{textItem}</mark><br/><br/>
        </>
      )
    )}
  </blockquote>
);

export const ColorTextPresenterPropTypes = {
  colorTextItems: PropTypes.object
}

ColorTextPresenter.propTypes = ColorTextPresenterPropTypes

ColorTextPresenter.defaultProps = {
  colorTextItems: {}
}

export default ColorTextPresenter