var CommentBox = React.createClass({

  loadCommentsFromServer: function(){ // this function updates state via this.setState
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data){
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


    return(
      <div className="commentBox">
      <h3>Comments</h3>
      <CommentList data={this.state.data} />
      <CommentForm />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function(){
      var commentNodes = this.props.data.map(function (comment){
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
var converter = new Showdown.converter();
var Comment = React.createClass({
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

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="commentForm">
      Hello, world! I am a commentForm.
      </div>
    )
  }
});


React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
