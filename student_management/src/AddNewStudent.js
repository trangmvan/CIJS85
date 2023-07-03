import { useState } from 'react';

const AddNewStudent = () => {
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [math, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, class: studentClass, math, physics, chemistry };

    fetch('http://localhost:8000/studentsList', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    })
      .then(() => {
        console.log('New student added');

      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="addNewStudent">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Class</label>
        <input
          type="text"
          required
          onChange={(e) => setStudentClass(e.target.value)}
          value={studentClass}
        />
        <label>Math</label>
        <input
          type="number"
          required
          onChange={(e) => setMath(e.target.value)}
          value={math}
        />
        <label>Physics</label>
        <input
          type="text"
          required
          onChange={(e) => setPhysics(e.target.value)}
          value={physics}
        />
        <label>Chemistry</label>
        <input
          type="text"
          required
          onChange={(e) => setChemistry(e.target.value)}
          value={chemistry}
        />
        <button>Add Student</button>
      </form>
    </div>
  );
};

export default AddNewStudent;
