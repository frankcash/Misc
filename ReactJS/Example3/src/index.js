/**
*@summary Generates link for checking json file
*/
React.render(
  <a href="/comments.json">Check out the JSON </a>,
  document.getElementById('serverJson')
);

/**
*
*/
var converter = new Showdown.converter();
var Comment = React.createClass({
  /**
  *@Summary checks for required proptype
  */
  propTypes:{
    author: React.PropTypes.string.isRequired,
  },
  render: function(){
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    return(
      <div className="comment">
      <h2 className="commentAuthor">
    {this.props.author}
    </h2>
    <span dangerouslySetInnterHTML={{__html: rawMarkup}} />
    </div>
  );
}
});
var CommentList = React.createClass({

  render: function(){
    var commentNodes = this.props.data.map(function (comment){
      console.log(comment);
      return(
        <Comment author = {comment.author} >
          {comment.text}
        </Comment>
      )
  });
  return(
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

/**
*
*/
var CommentBox = React.createClass({

  loadCommentsFromServer: function(){ // this function updates state via this.setState
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data){
        console.log("success");
        this.setState({data: data}); // this.setState replaces old array of comments with new one from server
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function(){ // executes once per life cycle, sets beginning state
    return {data:[]};
  },
  componentDidMount: function(){ // when component is mounted call function
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer(), this.props.pollInterval);
  },
  render: function(){
    // Passes callback from parent => child
    return(
      <div className="commentBox">
      <h3>Comments</h3>
      <CommentList data={this.state.data} />
      </div>
    );
  }
});

/**
*
*/
React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);

/**
*
*/
var CountryDropdown = React.createClass({
  getInitialState: function(){
    return{
      showOptions:false
    };
  },

  render: function(){
    var options;
    var setState;
    if(this.state.showOptions){
      console.log("state of showOptions: ", this.state.showOptions);
      setState = "true";
    }else{
      console.log("state of showOptions: ", this.state.showOptions);
      setState = "!true";
    }
    return(
      <div className="dropdown" onClick={this.handleClick}>
        <label>State is {setState}</label>
      </div>
    )

  },

  handleClick: function(e){
    this.setState({showOptions: !this.state.showOptions})
  }
})

React.render(
  <CountryDropdown/>,
  document.getElementById('dropdown')
);
