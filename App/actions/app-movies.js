/** @jsx React.DOM */
var Api = require('../utils/api');

var MoviesActions = {
    getMoviesData: function() {
        Api.getMoviesData();
    },
}

module.exports = MoviesActions;