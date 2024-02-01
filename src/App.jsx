import { useState } from "react";
import "./App.css";
import "./component/request-list";
import RequestList from "./component/request-list";
import Payload from "./component/payload";

function App() {
  const [requestList, setRequestList] = useState([]);
  const [payload, setPayload] = useState({});

  // const commonPayload = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer YourAccessToken",
  //     "User-Agent": "MockUserAgent",
  //   },
  //   body: {
  //     event: "mock_event",
  //     data: {
  //       key1: "value1",
  //       key2: "value2",
  //       key3: "value3",
  //     },
  //   },
  // };
  //
  // const requests = [
  //   {
  //     hash: "asdffasfsadf",
  //     path: "/",
  //     method: "POST",
  //     timestamp: "00:12:12",
  //     document_id: {
  //       ...commonPayload,
  //     },
  //   },
  //   {
  //     hash: "asdfasfsadf",
  //     path: "/",
  //     method: "POST",
  //     timestamp: "00:12:12",
  //     document_id: {
  //       ...commonPayload,
  //     },
  //   },
  //   {
  //     hash: "asdfasff",
  //     path: "/",
  //     method: "POST",
  //     timestamp: "00:12:12",
  //     document_id: {
  //       ...commonPayload,
  //     },
  //   },
  // ];

  return (
    <>
      <RequestList
        requestList={requestList}
        setRequestList={setRequestList}
        setPayload={setPayload}
      />
      <Payload payload={payload} />
    </>
  );
}

export default App;
