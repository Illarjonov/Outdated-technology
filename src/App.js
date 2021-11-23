import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout.jsx';
import Quiz from './containers/quiz/quiz.jsx';

class App extends Component {
  render(){
    return(
    <Layout>
        <Quiz/>
    </Layout>
  )
  }
}

export default App;
