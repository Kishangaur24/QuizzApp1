
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Quizz from './Component/Quizz/Quizz';
import QuizzResult from './Component/QUizzResult/QuizzResult';
import RankPage from './Component/RankPage/RankPage';

import HomePage from './HomePage/HomePage';

function App() {

  return (
    <div>
      <BrowserRouter>
     <Header/>
      <Routes>
    <Route exact path='/' element={<HomePage/>}></Route> 
    <Route exact path='/Quizz' element={<Quizz/>}></Route> 
    <Route exact path='/Result' element={<QuizzResult/>}></Route> 
    <Route exact path='/Rank' element={<RankPage/>}></Route> 
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
