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
      .then((data) => console.log(data));
  };

  return (
    <Students.Provider value={{ students, setStudents, postStudent }}>
      {children}
    </Students.Provider>
  );
};

export default StudentsProvider;
