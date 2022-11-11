import SideBar from "./Component/Static/SideBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Users from "./Component/Dynamic/Users";
import DashBoard from "./Component/Dynamic/DashBoard";
import UserForm from "./Component/Dynamic/UserForm";
import UsersView from "./Component/Dynamic/UsersView";
import UserEdit from "./Component/Dynamic/UserEdit";
import NotFound from "./Component/Dynamic/NotFound";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={3} style={{ minHeight: "100vh" }}>
        <div className="container-fluid p-0">
          <Router>
            <SideBar mode={mode} setMode={setMode} />
            <div className="container mt-4 mb-4 ms-4 me-4 p-0">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/Users" element={<Users />} />
                <Route path="/Users/View/:id" element={<UsersView />} />
                <Route path="/User/Edit/:id" element={<UserEdit />} />
                <Route path="/UserForm" element={<UserForm />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
              </Routes>
            </div>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
