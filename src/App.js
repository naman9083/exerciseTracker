import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/navbar';
import ExercisesList from './Components/exercises-list';
import EditExercise from './Components/edit-exercise';
import CreateExercise from './Components/create-exercise';
import CreateUser from './Components/create-user';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar/>
      <br />
      <Routes>
      <Route path='/' element={<ExercisesList/>}/>
      <Route path='/edit/:id' element={<EditExercise/>}/>
      <Route path='/create' element={<CreateExercise/>}/>
      <Route path='/user' element={<CreateUser/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
