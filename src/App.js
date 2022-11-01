import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowStudents from "./components/show-students";
import StudentForm from "./components/student-form";
import StudentsProvider from "./contexts/student-provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowStudents />,
  },
  {
    path: "/register",
    element: <StudentForm />,
  },
]);
function App() {
  return (
    <StudentsProvider>
      <RouterProvider router={router} />
    </StudentsProvider>
  );
}

export default App;
