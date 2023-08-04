import { useState } from "react";
import useFetch from "./useFetch";
import Studentlist from "./StudentList";
import AddNewStudent from "./AddNewStudent";
import Sort from "./Sort";

const Home = () => {
  const { isPending, data, error } = useFetch('http://localhost:8000/studentsList');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [students, setStudents] =useState(data)

  const handleAddButtonClick = () => {
    setShowAddStudent(!showAddStudent);
  };

  return (
    <div className="home">
      <h2>Student Management Project</h2>
      {showAddStudent && <AddNewStudent/>}
      {!showAddStudent && <button onClick={handleAddButtonClick}>Add Student</button>}
      {isPending && <div>....Fetching data</div>}
      <Sort />
      {data && <Studentlist students={data} />}
      {error && <div>{error}</div>}
    </div>
  )
};

export default Home;
