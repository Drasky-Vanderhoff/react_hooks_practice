import React from 'react';
import './index.scss'

export default ({text, highlightMarkers, children}) => {
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
