var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');


//Define actions object
var FluxCartActions = {

  //Receive initial product data
  receiveProduct: function(data){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },

  //set currently selected product variation
  selectProduct: function(index){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.SELECT_PRODUCT,
      data: index
    })
  },

  //add item to cart
  addToCart: function(sku, update){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  },

  //remove item from cart
  removeFromCart: function(sku){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_REMOVE,
      sku: sku
    })
  },

  //update cart visibility status
  updateCartVisibility: function(cartVisible){
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    })
  }
};

module.exports = FluxCartActions;
