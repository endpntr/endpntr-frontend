import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./component/landing-page";
import RequestList from "./component/request-list";
import Payload from "./component/payload";
import PayloadPlaceholder from "./component/payload-placeholder";
import NewEndpointBtn from "./component/new-endpoint";

function App() {
  const [requestList, setRequestList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/:endpointHash"
          element={
            <>
              <RequestList
                requestList={requestList}
                setRequestList={setRequestList}
              />
              <PayloadPlaceholder />
              <NewEndpointBtn />
            </>
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
