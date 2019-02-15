import React,{useRef} from 'react';
import './index.scss'

export default ({text, highlightMarkers, children}) => {
  let backdropEl = useRef(null)

  const closeMark = '</mark>'
  
  const handleHighlight = (input, highlightMarkers) => {
    let offset = 0;
    let newInput = input;
    highlightMarkers.forEach(({selectionStart, selectionEnd, color}) => [
      [selectionStart, `<mark style="background-color: ${color}">`], // open marker
      [selectionEnd, closeMark] // close marker
    ].forEach(([index, mark]) => {
      // Apply marker
      const pos = index + offset
      newInput = newInput.slice(0, pos) + mark + newInput.slice(pos)
      offset += mark.length
    }))

    return newInput
  }

  /* const handleHighlight = (input, highlightMarkers) => {
    return highlightMarkers.map(
      ({selectionStart, selectionEnd, color}) => (
        <span className="highlights">
          {input.slice(0, selectionStart)}
          <mark style={{backgroundColor: color}}>{input.slice(selectionStart, selectionEnd)}</mark>
          {input.slice(selectionEnd)}
        </span>
      )        
    ) */
  }

  const getHighlights = () => {
    let highlightText = text;
    if (highlightMarkers.length)
      highlightText = handleHighlight(highlightText, highlightMarkers);
    
    return highlightText;
  }

  return (
    <div className="highlight-box-overlay">
      <div className="backdrop"  ref={backdropEl}>
        <div className="highlights"
          dangerouslySetInnerHTML={{__html: getHighlights()}}
        />
      </div>
      {children}
    </div>
  )
}
