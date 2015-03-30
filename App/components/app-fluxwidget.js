'use strict';

var React = require('react-native');

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
        <Text>Example FLUX Widget from components</Text>
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