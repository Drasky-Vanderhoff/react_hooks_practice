import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const InputBox = ({
    text,
    onSelectedText,
    onChangeText
  }) => {
  const textareaEl = useRef(null)

  return (
    <textarea
      className="input-box"
      ref={textareaEl}
      value={text} 
      onClick={() => {
        const {selectionStart, selectionEnd} = textareaEl.current
        if (selectionStart !== selectionEnd) onSelectedText(selectionStart, selectionEnd)
      }}
      onInput={event => onChangeText(event.target.value)}
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