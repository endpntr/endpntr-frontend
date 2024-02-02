import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./component/landing-page";
import RequestList from "./component/request-list";
import Payload from "./component/payload";
import PayloadPlaceholder from "./component/payload-placeholder";
import NewEndpointBtn from "./component/new-endpoint";

function MainContent({ PayloadType, requestList, setRequestList }) {
  return (
    <div className="h-full">
      <div className="flex justify-between">
        <div className="text-2xl">endpntr</div>
        <NewEndpointBtn />
      </div>
      <div className="grid grid-cols-3 grid-rows-1 h-full">
        <div className="col-span-1 border-double border-4 border-gray-700 p-3 overflow-auto">
          <RequestList
            requestList={requestList}
            setRequestList={setRequestList}
          />
        </div>
        <div className="w-full h-full col-span-2 border-double border-4 border-gray-700 overflow-auto p-4">
          <PayloadType />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [requestList, setRequestList] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/:endpointHash"
          element={
            <MainContent
              PayloadType={PayloadPlaceholder}
              requestList={requestList}
              setRequestList={setRequestList}
            />
          }
        />
        <Route
          path="/:endpointHash/:requestHash"
          element={
            <MainContent
              PayloadType={Payload}
              requestList={requestList}
              setRequestList={setRequestList}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
