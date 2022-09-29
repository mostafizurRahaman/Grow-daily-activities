import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
function App() {
  return (
    <div className="main-container"> 
       <Home></Home>
       <Question></Question>
    </div>
  );
}

export default App;


