import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestService from "../../services/request";
import Request from "./request";

function RequestList() {
  const { endpointHash, requestHash } = useParams();
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await RequestService.getAll(endpointHash);
        setRequestList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Fetch data on mount

    const { hostname, port } = window.location;
    const wsURL = `ws://${hostname}${port ? `:${port}` : ""}/subscribe/${endpointHash}`;

    const socket = new WebSocket(wsURL);

    socket.addEventListener("message", (event) => {
      const { newRequestsAvailable } = JSON.parse(event.data);
      if (newRequestsAvailable) {
        fetchData();
      }
    });

    return () => {
      socket.close(); // Clean up WebSocket connection on unmount
    };
  }, [endpointHash]);

  return (
    <ul className="list-none p-0 max-h-full">
      {requestList.length < 1 ? (
        <p className="text-gray-500 active:bg-black">No requests yet!</p>
      ) : (
        requestList.map((req) => (
          <Request key={req.request_id} req={req} requestHash={requestHash} />
        ))
      )}
    </ul>
  );
}

export default RequestList;
