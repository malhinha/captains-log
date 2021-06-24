const React = require('react');
const DefaultLayout = require('./layouts/Default');

class New extends React.Component {
  render () {
    return (
      <DefaultLayout title={"Add a New Log Entry"}>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" /><br/>
        Entry: <textarea name="entry" rows="4" cols="50" /><br/>
        Is the ship broken? <input type="checkbox" name="shipIsBroken" /><br/>
        <input type="submit" name="" value="Create Log Entry"/>
      </form>
      </DefaultLayout>
    )
  };
};

module.exports = New;
