var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

//define initial data points
var _product = {},
  _selected = null;

//method to load product data from mock API
function loadProductData(data){
  _product = data[0];
  _selected = data[0].variants[0];
}

//method to set currently selected product variation
function setSelected(index){
  _selected = _product.variants[index];
}

//extend ProductStore with EventEmitter to add eventing capabilities

var ProductStore = _.extend({}, EventEmitter.prototype,{
  //Return product data
  getProduct: function(){
    return _product;
  },

  //Return selected product
  getSelected: function(){
      return _selected;
  },

  //Emit Change event
  emitChange: function(){
    this.emit('change');
  },

  //Add change listener
  addChangeListener: function(callback){
    this.on('change', callback);
  },

  //Remove change listener
  removeChangeListner: function(callback){
    this.removeListner('change', callback);
  }
});

//Register callback with AppDispatcher
AppDispatcher.register(function(payload){
  var action = payload.actionl;
  var text;
  switch(action.actionType){

    //Respond to RECEIVE_DATA action
    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    //Respond to SELECT_PRODUCT action
    case FluxCartConstants.SELECT_PRODUCT;
      setSelected(action.data);
      break;
      
    default:
      return true;
  }

  //if action was responded to, emit change event
  ProductStore.emitChange();

  return true;
});

module.exports = ProductStore;
