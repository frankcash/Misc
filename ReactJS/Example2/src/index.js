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
  handleCommentSubmit: function(comment){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        this.setState({data: data}); // replaces old array of data from original get
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
      <CommentForm onCommentSubmit={this.handleCommentSubmit} />
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
  handleSubmit: function(e){
    e.preventDefault(); // prevents DOM and allows react's virtual DOM to handle this
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if(!text || !author){
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Your name" ref="author" />
      <input type="text" placeholder="Say something..." ref="text" />
      <input type="submit" value="Post" />
      </form>
    );
  }
});


React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
