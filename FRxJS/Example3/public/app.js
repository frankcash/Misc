// Create a dummy "time" stream
const time = Bacon.fromBinder(observer => {
  const timer = setTimeout(function() {
    observer(Date.now());
  }, 1000);
  return function() {
    clearTimeout(timer);
  };
});
// The view, that subscribes to the stream
const Timer = React.createClass({
  getInitialState: function() {
    return {time: 0};
  },
  componentDidMount: function() {
    // onValue or subscribe return a function which will unsubscribe from the stream
    this._unsubscribe = time.onValue(time => this.setState({time: time}));
  },
  componentWillUnmount: function() {
    // this._unsubscribe();
  },
  render: function() {
    return (
      <div>Current Time: {this.state.time}</div>
    );
  }
});


React.render(
  <Timer/>,
  document.getElementById('timer')
);
