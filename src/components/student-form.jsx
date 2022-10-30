import { useState } from "react";
import { useStudents } from "../contexts/student-provider";

const StudentForm = () => {
  const [name, setName] = useState("");
  const { postStudent } = useStudents();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    postStudent(name);
    e.target.reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "0 auto",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <input placeholder='name' name='name' type={"name"} />
        <button>Register</button>
      </form>
    </>
  );
};

export default StudentForm;
