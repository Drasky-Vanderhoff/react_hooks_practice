import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const HighlightBoxOverlay = ({text, highlightMarkers, children}) => {
  const handleHighlight = (input, highlightMarkers) => {
    return highlightMarkers.map(
      ({selectionStart, selectionEnd, color}) => (
        <div className="backdrop">
          <div className="highlights">
            {input.slice(0, selectionStart)}
            <mark style={{backgroundColor: color}}>{input.slice(selectionStart, selectionEnd)}</mark>
            {input.slice(selectionEnd+1)}
          </div>
        </div>
      )        
    ) 
  }

  return (
    <div className="highlight-box-overlay">
      {text.length ? handleHighlight(text, highlightMarkers) : null}
      {children}
    </div>
  )
}

export const HighlightBoxOverlayPropTypes = {
  text: PropTypes.string,
  highlightMarkers: PropTypes.arrayOf(PropTypes.shape({
    selectionStart: PropTypes.number,
    selectionEnd: PropTypes.number,
    color: PropTypes.string
  }))
}

HighlightBoxOverlay.propTypes = HighlightBoxOverlayPropTypes

HighlightBoxOverlay.defaultProps = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  highlightMarkers: []
}

export default HighlightBoxOverlay
