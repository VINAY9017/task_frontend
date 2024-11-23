import Analytics from "./Pages/Analytics";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTask from "./Pages/Tasks/AddTask";
import EditTask from "./Pages/Tasks/EditTask";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import TaskBar from "./Compoents/TaskBar";


function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/analytics" element={<Analytics />} /> */}
        
        
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/taskbar/" element={<TaskBar />}>
            <Route path="" element={<Home />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="addTask" element={<AddTask />} />
            <Route path="editTask/:id" element={<EditTask />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
