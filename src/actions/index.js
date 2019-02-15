import {
  SAVE_SELECTED_TEXT
} from 'actions/actionTypes';

export const saveSelectedText = (
  color,
  selectionStart,
  selectionEnd
) => {
  return { 
    type: SAVE_SELECTED_TEXT,
    option: {
      color,
      selectionStart,
      selectionEnd
    }
  }
};