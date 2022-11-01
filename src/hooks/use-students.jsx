import { useEffect, useState } from "react";

const useStudents = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://backend-integration-test.vercel.app/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));

    return () => {};
  }, []);
  return { students, setStudents };
};
