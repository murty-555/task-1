import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import StreamedAreaChart from "./components/streamed-area-chart/StreamedAreaChart";
import SprintsBarChart from "./components/sprint-bar-chart/SprintsBarChart";
import CardDataUI from "./components/card-data-ui/CardDataUI";
import "./App.css";
import SprintsTableList from "./components/sprint-table/SprintsTableList";
import { routingData } from "./data/routing-data";


function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          {routingData.map((data,i) => (
            <li key={i}>
              <Link to={data.path}>{data.text}</Link>
            </li>
          ))}
          
        </ul>
        <div className="main-container">
        <Routes>
          <Route exact path="/" element={<StreamedAreaChart />} />
          <Route
            exact
            path="/streamed-area-chart"
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
            element={<SprintsTableList />}
          />
          <Route exact path="/card-data-ui" element={<CardDataUI />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
