import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HabitList from "./HabitList";
import CreateHabit from "./CreateHabit";
import HabitTracker from "./HabitTracker";
function App() {
  return (
    <div className="App d-flex justify-content-center ">
      <Router>
        <Routes>
          <Route exact path="/" element={<HabitList />} />
          <Route exact path="tracker/:habitId" element={<HabitTracker />} />
          <Route exact path="create" element={<CreateHabit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
