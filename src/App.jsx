import { Routes, Route } from "react-router-dom";
import Payload from "./component/endpoint/payload";
import PayloadPlaceholder from "./component/endpoint/payload-placeholder";
import Endpoint from "./component/endpoint/endpoint";
import LandingPage from "./component/landing/landing-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/:endpointHash"
        element={<Endpoint PayloadType={PayloadPlaceholder} />}
      />
      <Route
        path="/:endpointHash/:requestHash"
        element={<Endpoint PayloadType={Payload} />}
      />
    </Routes>
  );
}

export default App;
