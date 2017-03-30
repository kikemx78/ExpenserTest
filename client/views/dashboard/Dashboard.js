import React from 'react';
import Layout from '../../components/Layout';

class Dashboard extends React.Component {

  componentDidMount() {
    document.title = 'Dashboard';
  }

  render() {
    return (
      <Layout>
        <h1 className="mdl-typography--title">Dashboard</h1>
        <p className="mdl-typography--body-1">
          Dashboard
        </p>
      </Layout>
    );
  }

}

export default Dashboard;