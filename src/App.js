import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveSelectedText } from 'actions'
import InteractiveColorRow from 'components/InteractiveColorRow';
import InputBox from 'components/InputBox';
import ColorTextPresenter from 'components/ColorTextPresenter';
import config from './config.json';
import './App.scss';

class App extends Component {  
  constructor(props) {
    super(props)

    const highlightedColor = config.availableColorPairs.find(
      ({isHighlighted}) => isHighlighted
    ).background || ""

    this.state = {
      selectionColor: highlightedColor,
      filterColor: [highlightedColor]
    }
  }

  saveSelectedText = (selectionStart, selectionEnd) => {this.props.saveSelectedText(
    this.state.selectionColor,
    selectionStart,
    selectionEnd,
    config.text
  )}

  setSelectionColor = ([selectionColor]) => this.setState({selectionColor})
  setFilterColor = (filterColor) => this.setState({filterColor})

  _generateFilteredColorTextItems = () => this.state.filterColor.map(
    color => ({color: color, textItems: this.props.higlightedTextItems[color]})
  )
  
  render() {
    return (
      <div className="app">
        <InteractiveColorRow 
          colorBoxes={config.availableColorPairs} 
          onSelectedColorRow={this.setSelectionColor}
          descriptionText={config.selectorDescriptionText}
          multipleSelections={false}
        />
        <InputBox text={config.text} onSelectedText={this.saveSelectedText} />
        <InteractiveColorRow 
          colorBoxes={config.availableColorPairs} 
          onSelectedColorRow={this.setFilterColor} 
          descriptionText={config.filterDescriptionText}
          multipleSelections={true}
        />
        <ColorTextPresenter colorTextItemsLists={this._generateFilteredColorTextItems()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  higlightedTextItems: state.higlightedTextItems
})

const mapDispatchToProps = dispatch => ({
  saveSelectedText: (
    ...params
  ) => dispatch(saveSelectedText(
    ...params
  ))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
