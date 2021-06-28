const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component {
  render () {
    return (
      <DefaultLayout title={"Add a New Log Entry"}>
      <form action="/logs" method="POST" id="entry-form">
        <p>Title:</p>
        <input type="text" name="title" />
        <p>Entry:</p>
        <textarea name="entry" rows="4" cols="50" />
        <p>Is the ship broken?</p>
        <input type="checkbox" name="shipIsBroken" />
        <button type="submit" name="" value="Create Log Entry" class="yellow" id="entry-submit">Submit</button>
      </form>
      </DefaultLayout>
    )
  };
};

module.exports = New;
