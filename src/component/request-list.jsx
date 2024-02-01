import { useState, useEffect } from "react";
import PayloadService from "../services/payload";

function RequestList({ requestList, setRequestList, setPayload }) {
  useEffect(
    () =>
      setRequestList([
        // result.rows
        {
          hash: "asdffasfsadf",
          path: "/",
          method: "POST",
          timestamp: "00:12:12",
          document_id: 1,
        },
        {
          hash: "asdfasfsadf",
          path: "/",
          method: "POST",
          timestamp: "00:12:12",
          document_id: 2,
        },
        {
          hash: "asdfasff",
          path: "/",
          method: "POST",
          timestamp: "00:12:12",
          document_id: 3,
        },
      ]),
    [setRequestList],
  );

  const handleRequestClick = async (req) => {
    try {
      const result = PayloadService.get(req.document_id);
      setPayload(result);
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  return (
    <>
      <div>
        <div id="request-list">
          <ul>
            {requestList.map((req) => {
              return (
                <li onClick={() => console.log("hello")} key={req.hash}>
                  {req.method} {req.path} {req.timestamp}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RequestList;
