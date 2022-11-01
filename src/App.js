import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import ShowStudents from "./components/show-students";
import StudentForm from "./components/student-form";
import StudentsProvider from "./contexts/student-provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <ShowStudents />,
      },
      {
        path: "/register",
        element: <StudentForm />,
      },
      {
        path: "/update/:_id",
        element: <StudentForm />,
      },
    ],
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
