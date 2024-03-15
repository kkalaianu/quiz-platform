import {  Routes, Route } from "react-router-dom";
import Header from '../src/components/Header/Header'
import Home from '../src/components/Home/Home';
import MyQuiz from '../src/Pages/My-Quiz/My-quiz';
import AddQuiz from '../src/Pages/Create_New_Quiz/new-Quiz';
import PlayQuiz from '../src/Pages/Play-Quiz/PlayQuiz';
import MCQSingle from '../src/Pages/Create_New_Quiz/MCQ-Single';
import PlayQuizCard from '../src/Pages/Play-Quiz/playquizcard';


function App() {
  
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Quiz" element={<MyQuiz/>} />
          <Route path="/newquiz" element={<AddQuiz/>} />
          <Route path="/PlayQuiz" element={<PlayQuiz/>} />
          <Route path="/newquiz/MCQSingle" element={<MCQSingle/>} />
          <Route path="/QuizCard" element={<PlayQuizCard/>} />


          
        </Routes>

    </div>
  );
}

export default App;
