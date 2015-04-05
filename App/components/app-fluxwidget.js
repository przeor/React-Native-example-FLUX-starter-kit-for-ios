'use strict';

var React = require('react-native');
var MoviesButton = require('./app-moviesbutton');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;

var FluxWidget = React.createClass({
  render: function() { 
    return ( 
      <View stlye={styles.fluxwidget}>
        <MoviesButton />
      </View>
    );

  },
});

var styles = StyleSheet.create({
  fluxwidget: { 
    backgroundColor: 'green',
    flex: 2, 
    fontSize: 30
  },
});


module.exports = FluxWidget;