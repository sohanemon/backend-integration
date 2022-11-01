import { useStudents } from "../contexts/student-provider";

const ShowStudents = () => {
  const { students } = useStudents([]);
  console.log("🚀 > ShowStudents > students", students);
  return (
    <div>
      <ul>
        {students?.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowStudents;
