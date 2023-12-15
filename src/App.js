import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import StreamedAreaChart from "./components/StreamedAreaChart";
import SprintsBarChart from "./components/SprintsBarChart";
import SprintsTabelList from "./components/SprintsTabelList";
import CardDataUI from "./components/CardDataUI";
import Home from "./components/Home";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sprints-area-chart">Streamed Area Chart</Link>
          </li>
          <li>
            <Link to="/sprints-bar-chart">Sprints Bar Chart</Link>
          </li>
          <li>
            <Link to="/sprint-table-list">Sprints Table List</Link>
          </li>
          <li>
            <Link to="/card-data-ui">Card Data UI</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/sprints-area-chart"
            element={<StreamedAreaChart />}
          />
          <Route
            exact
            path="/sprints-bar-chart"
            element={<SprintsBarChart />}
          />
          <Route
            exact
            path="/sprint-table-list"
            element={<SprintsTabelList />}
          />
          <Route exact path="/card-data-ui" element={<CardDataUI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
