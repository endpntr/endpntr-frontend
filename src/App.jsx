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
            <div>
              <div className="flex justify-end">
                <NewEndpointBtn />
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-1">
                  <RequestList
                    requestList={requestList}
                    setRequestList={setRequestList}
                  />
                </div>{" "}
                <div className="col-span-2 place-self-center p-20 border-double border-4 border-gray-700">
                  <PayloadPlaceholder />
                </div>
              </div>
            </div>
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
              <NewEndpointBtn />
              <Payload />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
