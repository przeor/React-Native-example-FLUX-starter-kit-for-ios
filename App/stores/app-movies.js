var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";


var _moviesList = [
    // your state container where 
];



function _persistMoviesData(payload) {
	console.log("Movies gets async data from web api stores /app-movies.js");
  _moviesList = payload.response;
    // do whatever you need to do with the response to store
    // the state
}

function _movieButtonPressed(payload) {
  console.log('from movies store - Pressed!');
}


var MoviesStore = merge(EventEmitter.prototype, {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getState: function() {
    return _moviesList;
  },
  dispatcherIndex:AppDispatcher.register(function(payload){
    switch(payload.actionType) {
      case AppConstants.GET_MOVIES_DATA:
        _persistMoviesData(payload);
        break;
      case AppConstants.MOVIES_BUTTON_PRESSED:
        _movieButtonPressed(payload);
        break;
      default:
        return true;
    }
    MoviesStore.emitChange();

    return true;
  })
})

module.exports = MoviesStore;