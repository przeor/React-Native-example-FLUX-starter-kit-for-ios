'use strict';

var React = require('react-native');
var EntityButton = require('./app-entitybutton');

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
        <EntityButton />
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