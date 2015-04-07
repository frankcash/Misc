function and(a, b){
  return a && b;
}

/**
* @summary checks if empty
*/
function nonEmpty(x){
  return x.length>0;
}

/**
* @summary toggles visibility of an element
*/
function setVisibility(element, visible){
  element.toggle(visible);
}

/**
* @summary toggles an element to [!]enabled
*/
function setEnabled(element, enabled){
  element.attr("disabled", !enabled);
}


/**
* @summary creates event listener for text field to get value on keyup
*/
function textFieldValue(textField){
    function value(){
      return textField.val(); // returns the event's value
    }
    return textField.asEventStream("keyup").map(value).toProperty(value());// uses map to transform each event
}

$(function(){

  $(".ajax").hide();



  usernameField = $("#username input");
  fullnameField = $("#fullname input");
  registerButton = $("#register button");
  usernameAjaxIndicator = $("#username .ajax");
  registerAjaxIndicator = $("#register .ajax");
  unavailabilityLabel = $("#username-unavailable");

  // Inputs
  username = textFieldValue($("#username input"));
  fullname = textFieldValue($("#fullname input"));


  //Streams / properties
  usernameEntered = username.map(nonEmpty);
  fullnameEntered = fullname.map(nonEmpty);
  buttonEnabled = usernameEntered.and(fullnameEntered);

  //side effects
  buttonEnabled.assign(setEnabled, registerButton);


});
