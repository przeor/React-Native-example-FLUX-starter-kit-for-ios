'use strict';

var React = require('react-native');
var MoviesActions = require('../actions/app-movies');
var MoviesStore = require('../stores/app-movies');
var Button = require('react-native-button');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;

var MoviesButton = React.createClass({
  render: function() { 
    return ( 
      <Button style={{color: 'green'}} onPress={this._handlePress}>
        Press Me!
      </Button>
    );

  },
  _handlePress(event) {
    console.log('Pressed!');
  },
});

var styles = StyleSheet.create({
  fluxwidget: { 
    backgroundColor: 'green',
    flex: 2, 
    fontSize: 30
  },
});


module.exports = MoviesButton;