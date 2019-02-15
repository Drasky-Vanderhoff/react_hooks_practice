import { SAVE_SELECTED_TEXT } from 'actions/actionTypes'

const higlightedTextItems = (state = {}, action) => {
  switch (action.type) {
    case SAVE_SELECTED_TEXT:
      const {color, selectionStart, selectionEnd, subtext} = action.option;
      return {
        ...state,
        [color]: [
          ...(state[color] ? state[color]: []),
          {selectionStart, selectionEnd, color, subtext}
        ]
      };
    default:
      return state
  }
}

export default higlightedTextItems
