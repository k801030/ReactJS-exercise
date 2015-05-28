React.render(
  React.createElement('p', null, 'Hello, world!'),
  document.getElementById('welcome')
);

var commentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return(
      React.createElement('div', {className: "commentBox"}, 
        "This is a comment box."
        )
    );
  }
});

React.render(
  React.createElement(commentBox, null),
  document.getElementById('content')
);