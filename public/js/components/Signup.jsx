var React = require('react');

var Signup = React.createClass({
  render: function() {
    return (
      <div class="col-sm-6 col-sm-offset-3">

          <h1><span class="fa fa-sign-in"></span> Signup</h1>

          <% if (message.length > 0) { %>
              <div class="alert alert-danger"><%= message %></div>
          <% } %>

          <form action="/signup" method="post">
              <div class="form-group">
                  <label>Email</label>
                  <input type="text" class="form-control" name="email">
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password">
              </div>

              <button type="submit" class="btn btn-warning btn-lg">Signup</button>
          </form>

          <hr>

          <p>Already have an account? <a href="/login">Login</a></p>
          <p>Or go <a href="/">home</a>.</p>

      </div>
    )
  }
});

module.exports = Signup;