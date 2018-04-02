/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    ["CLR","AC"],
    ["MC", "MR", "MS", "M+"],
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

var initialState;

export default class ReactCalculator extends Component {

  constructor(props) {
      super(props);

      this.state = {
          previousInput: 0,
          currentInput: 0,
          selectedSymbol: null,
          isDecimal : null,
          savedValue: 0,
          history : ''
      }

      this.initialState = this.state;
  }

  render() {
    return (
      <View style={Style.rootContainer}>
          <View style={Style.displayContainer}>
            <Text style={Style.historyDisplayText}>{this.state.history}</Text>
            <Text style={Style.displayText}>{this.state.currentInput}</Text>
          </View>
          <View style={Style.inputContainer}>

                <View style={Style.inputRow} key= "row-1">

                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[0][0])}>
                    <Text style={Style.inputButtonText}>CLR</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[0][1])}>
                    <Text style={Style.inputButtonText}>AC</Text>
                    </TouchableHighlight>

                </View>
                <View style={Style.inputRow} key= "row-2">
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[1][0])}>
                    <Text style={Style.inputButtonText}>MC</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[1][1])}>
                    <Text style={Style.inputButtonText}>MR</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[1][2])}>
                    <Text style={Style.inputButtonText}>MS</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[1][3])}>
                    <Text style={Style.inputButtonText}>M+</Text>
                    </TouchableHighlight>
                </View>
                <View style={Style.inputRow} key= "row-3">
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[2][0])}>
                    <Text style={Style.inputButtonText}>1</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[2][1])}>
                    <Text style={Style.inputButtonText}>2</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[2][2])}>
                    <Text style={Style.inputButtonText}>3</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[2][3])}>
                    <Text style={Style.inputButtonText}>/</Text>
                    </TouchableHighlight>
                </View>
                <View style={Style.inputRow} key= "row-4">
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[3][0])}>
                    <Text style={Style.inputButtonText}>4</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[3][1])}>
                    <Text style={Style.inputButtonText}>5</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[3][2])}>
                    <Text style={Style.inputButtonText}>6</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[3][3])}>
                    <Text style={Style.inputButtonText}>*</Text>
                    </TouchableHighlight>
                </View>
                <View style={Style.inputRow} key= "row-5">
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[4][0])}>
                    <Text style={Style.inputButtonText}>7</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[4][1])}>
                    <Text style={Style.inputButtonText}>8</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[4][2])}>
                    <Text style={Style.inputButtonText}>9</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[4][3])}>
                    <Text style={Style.inputButtonText}>-</Text>
                    </TouchableHighlight>
                </View>
                <View style={Style.inputRow} key= "row-6">
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[5][0])}>
                    <Text style={Style.inputButtonText}>0</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[5][1])}>
                    <Text style={Style.inputButtonText}>.</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[5][2])}>
                    <Text style={Style.inputButtonText}>=</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]} 
                    underlayColor="#193441"
                    onPress={this.buttonClicked.bind(this, inputButtons[5][3])}>
                    <Text style={Style.inputButtonText}>+</Text>
                    </TouchableHighlight>
                </View>
          </View>
      </View>
    );
  }


  buttonClicked(input) {
      switch (typeof input) {
          case 'number':
              return this.formatInput(input)
          case 'string':
              return this.stringCondition(input)
      }
  }

  formatInput(num) {

    let currentInput = this.state.currentInput,
        isDecimal = this.state.isDecimal;

    if(isDecimal) {
      if(num > 0) {
        currentInput = eval(currentInput + num).toString();
      } else {
        currentInput = currentInput + num;
      }
    } else {
      currentInput = (currentInput * 10) + num;
    }

      this.setState({
          currentInput: currentInput,
          isDecimal: isDecimal,
          history: this.state.history + currentInput
      })
  }

  stringCondition(str) {
    switch (str) {
        case '/':
        case '*':
        case '+':
        case '-':
            this.setState({
                selectedSymbol: str,
                previousInput: this.state.currentInput,
                currentInput: 0,
                isDecimal: null,
                history: this.state.history + str
            });
            break;
        case '=':
            let symbol = this.state.selectedSymbol,
                currentInput = this.state.currentInput,
                previousInput = this.state.previousInput;

            if (!symbol) {
                return;
            }

            result = eval(previousInput + symbol + currentInput);

            this.setState({
                previousInput: 0,
                currentInput: result,
                selectedSymbol: null,
                isDecimal: null,
                history: this.state.history + str + result
            });
            break;
        case 'CLR':
            this.setState({
                isDecimal: null,
                selectedSymbol: null,
                previousInput: 0,
                currentInput: 0
            });
            break;
        case 'AC':
            this.setState({
                isDecimal: this.initialState.isDecimal,
                selectedSymbol: this.initialState.selectedSymbol,
                previousInput: this.initialState.previousInput,
                currentInput: this.initialState.currentInput,
                history: this.initialState.history
            });
            break;
        case '.':
            let isDecimal = this.state.isDecimal;
            if(isDecimal) break;

            this.setState({
                isDecimal: true,
                currentInput: this.state.currentInput + str,
                history: this.state.history + this.state.currentInput
            });
            break;
        case 'MC':
            this.setState({
                savedValue: 0
            });
            break;
        case 'MR':
            this.setState({
                currentInput: this.state.savedValue
            });
            break;
        case 'MS':
            this.setState({
                savedValue: this.state.currentInput,
                currentInput: 0
            });
            break;
        case 'M+':
            savedValue = this.state.savedValue;
            currentInput = this.state.currentInput;

            this.setState({
                currentInput: eval(savedValue + "+" + currentInput)
            });
            break;
        }
    }
}

var Style = StyleSheet.create({
  rootContainer: {
      flex: 1
  },

  inputContainer: {
      flex: 7,
      backgroundColor: '#ff8c00'
  },

  inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: '#91AA9D'
  },


  inputButtonText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black'
  },

  inputRow: {
      flex: 1,
      flexDirection: 'row'
  },

  displayContainer: {
      flex: 2,
      backgroundColor: '#193441',
      justifyContent: 'center'
  },

  displayText: {
      color: 'white',
      fontSize: 38,
      fontWeight: 'bold',
      textAlign: 'right',
      padding: 20
  },

  inputButtonHighlighted: {
    backgroundColor: '#193441'
  },

  historyDisplayContainer: {
    flex: 1,
    backgroundColor: '#193441'
  },

  historyDisplayText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'right',
      padding: 20
  },
});