/**
* @summary Renders name component. ONLY call this component if you want to render it.
*/
var UsernameInput = React.createClass({
  getDefaultProps: function(){
    return{

    };
  },

  /**
  * @summary returns desired style
  * @func style
  */
  style: function() {
    return {
      // styles here

    };
  },

  render: function(){
    return(
      <div>
        <input type="text" placeholder="Username"></input>
        <em class="ajax"></em>
        <em id="username-unavailable" class="tooltrip">Username is unavailable</em>
      </div>
    );
  }
});

React.render(
  <UsernameInput/>,
  document.getElementById('username')
);
