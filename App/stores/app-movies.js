var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";


var _moviesList = [
    // your state container where 
];



function _persistMoviesData(response) {
	console.log("Movies gets async data from web api stores /app-movies.js");
  _moviesList = response;
    // do whatever you need to do with the response to store
    // the state
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
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType) {
        case AppConstants.GET_ENTITY_DATA:
            _persistMoviesData(action.response);
            break;
        default:
            return true;
    }
    MoviesStore.emitChange();

    return true;
  })
})

module.exports = MoviesStore;