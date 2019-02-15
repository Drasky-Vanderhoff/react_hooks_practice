import React, { Component } from 'react';
import { connect } from 'react-redux'
import { saveSelectedText } from 'actions'
import InteractiveColorRow from 'components/InteractiveColorRow';
import InputBox from 'components/InputBox';
import ColorTextPresenter from 'components/ColorTextPresenter';
import HighlightBoxOverlay from 'components/HighlightBoxOverlay';
import config from './config.json';
import './App.scss';

class App extends Component {  
  constructor(props) {
    super(props)

    const highlightedColor = config.availableColorPairs.find(
      ({isHighlighted}) => isHighlighted
    ).background || ""

    this.state = {
      currentText: config.text,
      selectionColor: highlightedColor,
      filterColor: [highlightedColor]
    }
  }

  saveSelectedText = (selectionStart, selectionEnd) => this.props.saveSelectedText(
    this.state.selectionColor,
    selectionStart,
    selectionEnd,
    this.state.currentText
  )

  setSelectionColor = ([selectionColor]) => this.setState({selectionColor})
  setFilterColor = (filterColor) => this.setState({filterColor})
  setCurrentText = (currentText) => this.setState({currentText})

  _generateHighlightMakers = () => {
    const higlightedTextItems = Object.values(this.props.higlightedTextItems)
    
    return higlightedTextItems.length ? higlightedTextItems.reduce(
      (prev, current) => [...prev, ...current]
    ) : []
  }

  _generateFilteredColorTextItems = () => this.state.filterColor.map(
    color => ({
      color: color,
      textItems: (this.props.higlightedTextItems[color] || []).map(({subtext}) => subtext)
    })
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
        <HighlightBoxOverlay highlightMarkers={this._generateHighlightMakers()}
          text={this.state.currentText}
        >
          <InputBox 
            text={this.state.currentText}
            onSelectedText={this.saveSelectedText}
            onChangeText={this.setCurrentText}
          />
        </HighlightBoxOverlay>
        
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
