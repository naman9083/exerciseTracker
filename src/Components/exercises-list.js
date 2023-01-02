import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exercise = (props) => {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`}> Edit</Link> | <button onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>

            </td>
        </tr>
    )

}

function ExercisesList() {
    const[exercises, setExercises] = useState([]);

    const deleteExercise = (id) => {
        console.log(id);
        axios.delete('http://localhost:5000/exercise/' + id)
            .then(res => console.log(res.data));
        setExercises(exercises.filter(el => el._id !== id));

    }
    useEffect(() => {
        axios.get('http://localhost:5000/exercise/')
            .then(response => {
                setExercises(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    const exerciseList = () => {
        return exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />
        })
    }


  return (
    <div>
        <h3>Logged Exercises</h3>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {exerciseList()}
            </tbody>
        </table>

    </div>
  )
}

export default ExercisesList
