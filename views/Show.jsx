const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const log = this.props.log;

    return (
      <DefaultLayout title={log.title}>
        <p>{log.entry}</p>
        <p>Ship Status: {log.isShipBroken? 'Disabled' : 'All systems go' }</p>
        <p>{`${log.createdAt}`}</p>
      </DefaultLayout>
    )
  }
};

module.exports = Show;
