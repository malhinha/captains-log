const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Index extends React.Component {
  render() {
    const logs = this.props.logs;

    return (
      <DefaultLayout title="Captains Log Entries">
        <ul>
          {logs.map((log) => {
            return (
              <li key={log._id}>{log.title}</li>
            )
          })}
        </ul>
        <nav>
          <a href="/logs/new">Add a new log entry</a>
        </nav>
      </DefaultLayout>
    )
  };
};

module.exports = Index;
