const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Edit extends React.Component {
  render () {
    return (
      <DefaultLayout title="Edit Log Entry">
      <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST" id="entry-form">
        <p>Title:</p>
        <input type="text" name="title" defaultValue={this.props.log.title} />
        <p>Entry:</p>
        <textarea name="entry" rows="4" cols="50" defaultValue={this.props.log.entry} />
        <p>Is the ship broken?</p>
          {
            this.props.log.shipIsBroken
            ? <input type="checkbox" name="shipIsBroken" defaultChecked/>
            : <input type="checkbox" name="shipIsBroken" />
          }

        <button type="submit" name="" value="Save Log Entry" class="yellow" id="entry-submit">Save</button>
      </form>
      </DefaultLayout>
    )
  };
};

module.exports = Edit;
