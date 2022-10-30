import { useEffect, useState } from "react";

const useStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));

    return () => {};
  }, []);
  return { students, setStudents };
};
