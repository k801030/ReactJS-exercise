React.render(
  React.createElement('p', null, 'Hello, world!'),
  document.getElementById('welcome')
);


// comment box
var commentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return(
      React.createElement('div', {className: "commentBox"}, 
        React.createElement(commentList),
        React.createElement(commentForm)
      )
    );
  }
});

// commentList
var commentList = React.createClass({displayName: 'CommentList',
  render: function() {
    return(
      React.createElement('div', {className: "commentList"},
        React.createElement(comment, {author: "Vison"},
          "Hello, I am Vison."
        ),
        React.createElement(comment, {author: "Jessy"},
          "Nice to meet you."
        )
      )
    );
  }  
})

// commentForm
var commentForm = React.createClass({displayName: 'CommentForm',
  render: function() {
    return(
      React.createElement('div', {className: "commentForm"})
    );
  }  
})


// comments
var comment = React.createClass({displayName: 'Comment',
  render: function() {
    return(
      React.createElement('div', {className: 'comment'},
        React.createElement('h2', {className: 'commentAuthor'},
          this.props.author
        ),
        this.props.children
      )
    );
  }
})

React.render(
  React.createElement(commentBox, null),
  document.getElementById('content')
);