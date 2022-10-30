import ShowStudents from "./components/show-students";
import StudentForm from "./components/student-form";
import StudentsProvider from "./contexts/student-provider";

function App() {
  return (
    <StudentsProvider>
      <StudentForm />
      <ShowStudents />
    </StudentsProvider>
  );
}

export default App;
