import React, { Component } from "react";
import Layout from './hoc/Layout/Layout.jsx';
import Quiz from './containers/quiz/quiz.jsx';
import { Routes ,Route } from "react-router-dom";
import QuizCreator from './containers/quizCreator/quizCreator';
import Auth from "./containers/auth/auth";

class App extends Component {
  render(){
    return(
    <Layout>
      <Routes>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quiz-creator" element={<QuizCreator/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </Layout>
  )
  }
}

export default App;
// <Routes>
//     <Route path="/" element={Quiz}/>
//     <Route path="/quiz-creator" element={QuizCreator}/>
//     <Route path="/auth" element={Auth}/>
// </Routes>
