import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ChartBuilder from './containers/ChartBuilder/ChartBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ChartBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
