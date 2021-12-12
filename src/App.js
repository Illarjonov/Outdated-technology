import React, { Component } from "react";
import Layout from './hoc/Layout/Layout.jsx';
import Quiz from './containers/quiz/quiz.jsx';
import { Routes ,Router , Route  } from "react-router-dom";
import QuizCreator from './containers/quizCreator/quizCreator';
import Auth from "./containers/auth/auth";
import QuizList from "./containers/quizList/quizList"
class App extends Component {
  render(){
    return(
    <Layout>

      <Routes>
        <Route path="/quiz/:id" element={<Quiz/>}/>
        <Route path="/quiz-creator" element={<QuizCreator/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/" element={<QuizList/>}/>
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
