import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";

// Routing
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="cursor-default font-roboto">
      <Header />
      <div>
        <Sidebar />

        <Routes>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:course_id" element={<Courses />} />

          {/* <Route element={<ProtectedFromUser />}>
          <Route path="/login" element={<Login />} />
        </Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
