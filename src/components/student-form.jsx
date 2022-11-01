import { useLocation, useParams } from "react-router-dom";
import { useStudents } from "../contexts/student-provider";

const StudentForm = () => {
  const { postStudent, updateStudent } = useStudents();
  const params = useParams();
  console.log("🚀 > StudentForm > params", params);
  const { pathname } = useLocation();
  const isRegister = pathname.includes("register");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (isRegister) {
      postStudent(name);
    } else {
      updateStudent(params._id, name);
    }
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
        <button>{isRegister ? "Register" : "Update"}</button>
      </form>
    </>
  );
};

export default StudentForm;
