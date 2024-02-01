import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./component/landing-page";
import RequestList from "./component/request-list";
import Payload from "./component/payload";

function App() {
  const [requestList, setRequestList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/:endpointHash"
          element={
            <RequestList
              requestList={requestList}
              setRequestList={setRequestList}
            />
          }
        />
        <Route
          path="/:endpointHash/:requestHash"
          element={
            <>
              <RequestList
                requestList={requestList}
                setRequestList={setRequestList}
              />
              <Payload />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
