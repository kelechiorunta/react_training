/**
 * Title: Students' List
 * Instructions
 * Create an allStudents state variable(which is an array) using useState.
 * Pass in the initialValue below as an initialState value to the allStudents state variable.
 * Create a student state variable object with grouped related properties: name, course and level properties, initialized to empty strings
 * Map the allStudents array to form a list of updated students
 * Choose your state structure wisely
 *
 */

import { useState } from 'react';

interface StudentType {
  name: string;
  course: string;
  level: string;
}


const initialValue: StudentType[] = [
  { name: "Tega", course: "React", level: "intermediate" },
];

export default function Students() {

  const [ allStudents,setAllStudents ] = useState( initialValue );
  const [ student,setStudent ] = useState( { name:"", course:"", level:"" } );

  const handleNameChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    //Complete the function by updating the student state variable name property
    const { name, value } = e.target;
    setStudent ( prev => ({
      ...prev,
      [name]: value,
    }))
  };
  const handleCourseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Complete the function by updating the student state variable course property
    const { name, value } = e.target;
    setStudent ( prev => ({
      ...prev,
      [name]: value,
    }))
  };
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //Complete the function by updating the student state variable level property
    const { name, value } = e.target;
    setStudent ( prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const addStudent = () => {
    //Update the student state variable(which is an array of students) with a new student
    //using the spread syntax.
    setAllStudents( prev => ([
      ...prev,
      student
    ]));

    setStudent ( { name:"", course:"", level:"" })
  };
  return (
    <div>
      <h1>Students</h1>
      <div className="container row g-3">
        <label htmlFor="name" className="col-md-6">
          <input
            name="name"
            className="form-control"
            type="text"
            value={student.name}
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="course" className="col-md-6">
          <input
            name="course"
            type="text"
            value={student.course}
            className="form-control"
            placeholder="Enter Course"
            onChange={handleCourseChange}
          />
        </label>

        <label htmlFor="level" className="col-12">
          <input
            name="level"
            type="text"
            value={student.level}
            className="form-control"
            placeholder="Enter Level"
            onChange={handleLevelChange}
          />
        </label>
        <div className="col-12">
          <button 
            className="btn btn-primary"
            onClick={() => addStudent()}
            >
              Add Student
          </button>
        </div>
        
      </div>
      {/* Uncomment this and complete the mapping of the students */}
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((s: StudentType) => (
            <tr>
              <td>{s.name}</td>
              <td>{s.course}</td>
              <td>{s.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
