
# React Hooks Practice 

Playground app created with Create React App that uses :
  - React + Redux for development.
  - PropTypes for typing.
  - Jest + Enzyme for testing.

## What it does

Allows the user to highlight with multiple colors parts of a text that can be inserted or edited inside a textarea,
  bellow that the user can filter those part of the text by selecting the colors that wish to see.

## React Components 

The app is composed of the following components :

### ColorBox

Is just a box that recieves two colors and can be highlighted.

### InteractiveColorRow

Generates a row of ColorBox components that can be selected. It allows both for ratiobutton behavior and checkbox behavior 
  by changing multipleSelections value.
This component is use both for choosing the highlight color as for filter the selections. Also allows for showing a description
  on the left side

### InputBox

A textarea component that handles the selection events in it and any updates made to it.

### HighlightBoxOverlay

Renders marks for each selection with their respective color over the children that is given to it ( in this case a InputBox )

### ColorTextPresenter

It allows for showing parts that where selected in the text.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

