import { useState} from 'react'


const Studentlist = ({ students }) => {
  
  const [studentList, setStudentList] =useState(students);

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/studentsList/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Student deleted');
        setStudentList(studentList.filter(student => student.id !==id))
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };



  return (
    <div className="student-list">
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Math</th>
              <th>Physics</th>
              <th>Chemistry</th>
              <th>GPA</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => (
              <tr className="student" key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.math}</td>
                <td>{student.physics}</td>
                <td>{student.chemistry}</td>
                <td>{student.gpa}</td>
                <td>
                  <button className="delete-button"
                  onClick={() => handleDelete(student.id)}
                  >Delete</button>
                  <button className="update-button"
                  // onClick={handleUpdate}
                  >Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Studentlist;

