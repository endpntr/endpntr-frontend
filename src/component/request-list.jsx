import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RequestService from "../services/request";

function RequestList({ requestList, setRequestList }) {
  const navigate = useNavigate();
  const { endpointHash } = useParams();
  console.log(endpointHash);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await RequestService.getAll(endpointHash);
        setRequestList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setRequestList, endpointHash]);

  // The rest of your component logic

  const handleRequestClick = async (req) => {
    navigate(`/${req.endpoint_hash}/${req.request_hash}`);
  };

  return (
    <>
      <div>
        <div id="request-list">
          <ul>
            {requestList.length < 1 ? (
              <p>No requests yet!</p>
            ) : (
              requestList.map((req) => {
                return (
                  <li
                    onClick={() => handleRequestClick(req)}
                    key={req.request_id}
                  >
                    {req.http_method} {req.http_path} {req.received_at}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default RequestList;
