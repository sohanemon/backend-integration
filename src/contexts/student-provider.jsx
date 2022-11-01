import { createContext, useContext, useEffect, useState } from "react";
const Students = createContext();
export const useStudents = () => useContext(Students);
const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));

    return () => {};
  }, []);
  const postStudent = (name) => {
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => setStudents((p) => [...p, data]));
  };
  const updateStudent = (_id, name) => {
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => setStudents((p) => [...p]));
  };

  const deleteStudent = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then((data) => setStudents(students.filter((el) => el._id !== _id)));
  };

  return (
    <Students.Provider
      value={{
        students,
        setStudents,
        postStudent,
        deleteStudent,
        updateStudent,
      }}
    >
      {children}
    </Students.Provider>
  );
};

export default StudentsProvider;
