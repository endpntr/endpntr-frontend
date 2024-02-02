import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import LandingPage from "./component/landing-page";
import RequestList from "./component/request-list";
import Payload from "./component/payload";
import PayloadPlaceholder from "./component/payload-placeholder";
import NewEndpointBtn from "./component/new-endpoint";

function MainContent({ PayloadType, requestList, setRequestList }) {
  const { endpointHash } = useParams();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${text} copied to clipboard`);
    } catch (error) {
      alert("Error: Could not copy to clipboard");
    }
  };
  return (
    <div className="h-full">
      <div className="flex justify-between w-full py-3 px-2 sm:px-6 lg:px-8 border-0 border-gray-200 dark:border-gray-800">
        <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          endpntr.
        </div>
        <div></div>
        <div>
          <div
            className="p-2 bg-gray-500 inline-block rounded-l-lg cursor-pointer hover:bg-gray-700"
            onClick={() =>
              copyToClipboard(`https://endpntr.com/${endpointHash}`)
            }
          >
            Copy
          </div>
          <span className="inline-block bg-white text-gray-900 p-2">
            https://endpntr.com/api/req/{endpointHash}
          </span>
        </div>
        <NewEndpointBtn />
      </div>
      <div className="grid grid-cols-3 gap-5 grid-rows-1 h-4/5 mx-7">
        <div className="col-span-1 border-single border border-gray-500 rounded-sm p-3 overflow-auto shadow-2xl bg-gray-800">
          <RequestList
            requestList={requestList}
            setRequestList={setRequestList}
          />
        </div>
        <div className="w-full h-full col-span-2 border-single border border-gray-500 rounded-sm overflow-auto shadow-2xl p-6 bg-gray-800">
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
