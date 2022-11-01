import { useStudents } from "../contexts/student-provider";

const ShowStudents = () => {
  const { students, deleteStudent } = useStudents([]);
  console.log("🚀 > ShowStudents > students", students);

  return (
    <div style={{ margin: "50px" }}>
      <h1>All user : {students.length}</h1>
      <ul>
        {students?.map((el) => (
          <li key={el._id}>
            {el.name} <button onClick={() => deleteStudent(el._id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowStudents;
