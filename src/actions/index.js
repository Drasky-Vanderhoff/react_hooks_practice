import {
  SAVE_SELECTED_TEXT
} from 'actions/actionTypes';

export const saveSelectedText = (
  color,
  selectionStart,
  selectionEnd,
  text
) => ({ 
  type: SAVE_SELECTED_TEXT,
  option: {
    color,
    selectionStart,
    selectionEnd,
    subtext: text.slice(selectionStart, selectionEnd)
  }
});