import React, { Component } from "react";
import Layout from './hoc/Layout/Layout.jsx';
import Quiz from './containers/quiz/quiz.jsx';
import {Route, Switch} from 'react-router-dom'
import QuizCreator from './containers/quizCreator/quizCreator';
import Auth from "./containers/auth/auth";
import QuizList from "./containers/quizList/quizList"



class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" component={QuizList} />
        </Switch>
      </Layout>
    )
  }
}

export default App

// <Routes>
//     <Route path="/" element={Quiz}/>
//     <Route path="/quiz-creator" element={QuizCreator}/>
//     <Route path="/auth" element={Auth}/>
// </Routes>
