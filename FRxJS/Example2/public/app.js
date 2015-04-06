$(function(){

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
});
