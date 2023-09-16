import "../App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HabitList from "./HabitList";
import CreateHabit from "./CreateHabit";
import HabitTracker from "./HabitTracker";
import Page404 from "./Page404"
function App() {
  return (
    <div className="App d-flex justify-content-center ">
      <Router basename="/habit-tracker-4">
        <Routes>
          <Route exact path="/habit-tracker-4" element={<HabitList />} />
          <Route exact path="tracker/:habitId" element={<HabitTracker />} />
          <Route exact path="create" element={<CreateHabit />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
