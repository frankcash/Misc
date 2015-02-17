var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
      <h3>Comments</h3>
      <CommentList />
      <CommentForm />
      </div>
    );
  }
});
var CommentList = React.createClass({
  render: function(){
    return(
      <div className="commentList">
        <Comment author="Pete Hunt"> this is a comment </Comment>
        <Comment author="Jordan Walke"> this is another comment </Comment>
      </div>
    );
  }
});
var Comment = React.createClass({
  render: function(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
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
  <CommentBox/>,
  document.getElementById('content')
);
