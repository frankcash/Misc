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
      Hello, world I am a commentList.
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
