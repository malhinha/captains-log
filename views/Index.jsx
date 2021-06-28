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
              <li key={log._id}>
                <a href={`/logs/${log._id}`} class="log-link">{log.title}</a>
                <form method="POST" action={`/logs/${log._id}?_method=DELETE`}>
                  <button type="submit" value="DELETE" class="orange">Delete</button>
                </form>
                <a href={`/logs/${log._id}/edit`} class="button small blue-lite">Edit This Entry</a>
              </li>
            )
          })}
        </ul>
        <nav>
          <a href="/logs/new" class="button small yellow">Add a new log entry</a>
        </nav>
      </DefaultLayout>
    )
  };
};

module.exports = Index;
