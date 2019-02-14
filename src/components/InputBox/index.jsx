import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const InputBox = ({
    text,
    onSelectedText
  }) => {
  const textareaEl = useRef(null);
  const [currentText, onTextChange] = useState(text);

  return (
    <textarea
      className="input-box"
      ref={textareaEl}
      value={currentText} 
      onClick={(currentText) => {
        const {selectionStart, selectionEnd} = textareaEl.current
        if (selectionStart !== selectionEnd) onSelectedText(selectionStart, selectionEnd);
      }}
      onChange={({target:{value}}) => onTextChange(value)}
    />
  )
}
export const InputBoxPropTypes = {
  onSelectedText: PropTypes.func,
  text: PropTypes.string
}

InputBox.propTypes = InputBoxPropTypes

InputBox.defaultProps = {
  onSelectedText: () => {},
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

export default InputBox