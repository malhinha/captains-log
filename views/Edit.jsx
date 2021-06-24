const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Edit extends React.Component {
  render () {
    return (
      <DefaultLayout title="Edit Log Entry">
      <form action={`/logs/${this.props.log._id}?_method=PUT`} method="POST">
        Title: <input type="text" name="title" defaultValue={this.props.log.title} /><br/>
        Entry: <textarea name="entry" rows="4" cols="50" defaultValue={this.props.log.entry} /><br/>
        Is the ship broken?
          {
            this.props.log.isShipBroken
            ? <input type="checkbox" name="shipIsBroken" defaultChecked/>
            : <input type="checkbox" name="shipIsBroken" />
          }
        <br/>

        <input type="submit" name="" value="Save Log Entry"/>
      </form>
      </DefaultLayout>
    )
  };
};

module.exports = Edit;
