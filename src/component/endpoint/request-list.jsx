import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestService from "../../services/request";

function RequestList() {
  const navigate = useNavigate();
  const { endpointHash } = useParams();
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

  const handleRequestClick = async (req) => {
    navigate(`/${req.endpoint_hash}/${req.request_hash}`);
  };

  return (
    <div>
      <div>
        <ul className="list-none p-0">
          {requestList.length < 1 ? (
            <p className="text-gray-500">No requests yet!</p>
          ) : (
            requestList.map((req) => (
              <li
                onClick={() => handleRequestClick(req)}
                key={req.request_id}
                className="bg-gray-700 hover:bg-gray-900 cursor-pointer p-2 my-2 rounded transition duration-100"
              >
                <span className="text-purple-400 font-bold">
                  {req.http_method}
                </span>{" "}
                {req.http_path} {req.received_at}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default RequestList;
