// React hooks
import { useEffect } from "react";
// Routing
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// Components
import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import DashboardSidebar from "./components/global/DashboardSidebar";
// Pages
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import SignIn from "./pages/SignIn";
import LevelCheck from "./pages/LevelCheck";
import SignUp from "./pages/SignUp";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./components/studentDashboard/StudentProfile";
import StudentCurriculum from "./components/studentDashboard/StudentCurriculum";
import StudentAssestment from "./components/studentDashboard/StudentAssestment";
import AdminDashboard from "./pages/AdminDashboard";
import DashboardAdminSidebar from "./components/global/DashboardAdminSidebar";
import AdminUsers from "./components/adminDashboard/AdminUsers";
import AdminAssestment from "./components/adminDashboard/AdminAssestment";
import AdminCurriculum from "./components/adminDashboard/AdminCurriculum";
import AdminReports from "./components/adminDashboard/AdminReports";
import StudentTestScreen from "./components/studentDashboard/StudentTestScreen";

function App() {
  // Detecting current path
  const location = useLocation();

  return (
    <div className="cursor-default font-roboto">
      {location?.pathname?.includes("user") ||
      location?.pathname?.includes("admin") ||
      location?.pathname?.includes("test") ? (
        ""
      ) : (
        <Header />
      )}
      <div>
        {location?.pathname?.includes("user") ? (
          <DashboardSidebar />
        ) : location?.pathname?.includes("admin") ? (
          <DashboardAdminSidebar />
        ) : (
          <Sidebar />
        )}

        <Routes>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:course_id" element={<Courses />} />
          <Route path="/level_check/:check_id" element={<LevelCheck />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />

          {/* <Route element={<ProtectedFromUser />}>
          <Route path="/login" element={<Login />} />
        </Route> */}

          {/* protected routes users */}
          <Route path="/user/dashboard" element={<StudentDashboard />} />
          <Route path="/user/profile" element={<StudentProfile />} />
          <Route path="/user/curriculum" element={<StudentCurriculum />} />
          <Route path="/user/assestment" element={<StudentAssestment />} />

          <Route
            path="/test/:test_type/:assignment_id"
            element={<StudentTestScreen />}
          />

          {/* protected routes admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<AdminUsers />} />
          <Route path="/admin/assestment" element={<AdminAssestment />} />
          <Route path="/admin/curriculum" element={<AdminCurriculum />} />
          <Route path="/admin/reports" element={<AdminReports />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
