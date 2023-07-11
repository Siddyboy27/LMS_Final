import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import LoginPage from "./Pages/loginPage";
import HomePage from "./Pages/homePage";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import CoursesPage from "./Pages/coursesPage";
import CourseDetailPage from "./Pages/courseDetailsPage";
import MyCourse from "./Pages/myCoursePage";
import CourseStudy from "./Pages/courseStudyPage";
import CompletedPage from "./Pages/completedPage";
import Certificate from "./components/Certificate";
import CertificatePage from "./Pages/certificatePage";
import { Search } from "@mui/icons-material";
import SearchPage from "./Pages/searchPage";
function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={!isAuth ? <LoginPage /> : <Navigate to="/home" />}
            />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/courses"
              element={isAuth ? <CoursesPage /> : <Navigate to="/" />}
            />
            <Route
              path="/courses/:courseId"
              element={isAuth ? <CourseDetailPage /> : <Navigate to="/" />}
            />
            <Route
              path="/myCourses"
              element={isAuth ? <MyCourse /> : <Navigate to="/" />}
            />
             <Route
              path="/myCourses/:courseId"
              element={isAuth ? <CourseStudy /> : <Navigate to="/" />}
            />
            <Route
              path="/search/:searchQuery"
              element={isAuth ? <SearchPage /> : <Navigate to="/" />}
            />
            <Route
              path="/completed"
              element={isAuth ? <CompletedPage /> : <Navigate to="/" />}
            />
             <Route
              path="/completed/certificate/:courseId"
              element={isAuth ? <CertificatePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
