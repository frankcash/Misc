$(function(){

  function and(a, b){
    return a && b;
  }

  function nonEmpty(x){
    return x.length>0;
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

  username = textFieldValue($("input#username"));
  fullname = textFieldValue($("input#fullname"));




  usernameEntered = username.map(nonEmpty);
  fullnameEntered = fullname.map(nonEmpty);

  buttonEnabled = usernameEntered.and(fullnameEntered);

  buttonEnabled.not().onValue($("button#register"), "attr", "disabled"); // call the attr method of the register button and use disabled as the first arg


});
