import "../App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HabitList from "./HabitList";
import CreateHabit from "./CreateHabit";
import HabitTracker from "./HabitTracker";
import EditHabit from "./edit";
import Page404 from "./Page404";
function App() {
  return (
    <div className="App d-flex justify-content-center " style={{backgroundColor:"#E3E1D9",height:"100vh",fontFamily:"monospace"}}>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<HabitList />} />
          <Route exact path="tracker/:habitId" element={<HabitTracker />} />
          <Route exact path="edit/:habitId" element={<EditHabit />} />
          <Route exact path="create" element={<CreateHabit />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
