/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { 
  AppRegistry, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  ListView,
} = React;


var FluxWidget = require('./App/components/app-fluxwidget');


var API_KEY = 'wgcxhbxsrzrmjnzmh4d3hnbg'; 
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json'; 
var PAGE_SIZE = 25; 
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE; 
var REQUEST_URL = API_URL + PARAMS;


var MOCKED_MOVIES_DATA = [ 
  {
    title: 'Title', 
    year: '2015', 
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  }, 
];



var FluxExample = React.createClass({
  getInitialState: function() { 
    return { 
      dataSource: new ListView.DataSource({ 
        rowHasChanged: (row1, row2) => row1 !== row2, 
      }), 
      loaded: false, 
    };
  },
  componentDidMount: function() { 
    this.fetchData(); 
  },
  fetchData: function() { 
    fetch(REQUEST_URL) 
    .then((response) => response.json()) 
    .then((responseData) => { 
       this.setState({ 
        // dataSource: this.state.dataSource.cloneWithRows(responseData.movies), 
        dataSource: this.state.dataSource.cloneWithRows(MOCKED_MOVIES_DATA), 
        loaded: true, 
      });
    }) 
    .done(); 
  },
  render: function() { 
    if(this.state.error) {
      return this.renderErrorView();
    } else if (!this.state.loaded) { 
      return this.renderLoadingView(); 
    }
    
    return ( 
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this.renderMovie} 
          style={styles.listView} /> 
        <FluxWidget/>
      </View>

    );

  },
  renderLoadingView: function() { 
    return ( 
      <View style={styles.container}> 
      <Text> Loading movies... </Text> 
      </View> 
      ); 
  },
  renderErrorView: function() { 
    return ( 
      <View style={styles.container}> 
      <Text> Error: {this.state.error} </Text> 
      </View> 
      ); 
  },
  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  listView: { 
    paddingTop: 20, 
    backgroundColor: '#F5FCFF', 
  },
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  },
  fluxwidget: { 
    backgroundColor: 'green',
    flex: 2, 
    fontSize: 30
  },
  separator: { 
    height: 0.5,
    backgroundColor: '#CCCCCC', 
    marginTop: 10,
  },
  moviesstyle: { 
    flex: 1, 
    flexDirection: 'row',
    textAlign: 'center', 
  },
  rightContainer: { 
    flex: 1, 
  },
  thumbnail: { 
    width: 53, 
    height: 81, 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  title: { 
    fontSize: 20, 
    marginBottom: 8, 
    textAlign: 'center', 
  }, 
  year: { 
    textAlign: 'center', 
  },
});

AppRegistry.registerComponent('FluxExample', () => FluxExample);
