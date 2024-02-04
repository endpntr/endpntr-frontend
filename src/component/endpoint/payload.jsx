import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PayloadBody from "./payload-body";
import PayloadHeaders from "./payload-headers";
import PayloadService from "../../services/payload";

function Payload() {
  const [payload, setPayload] = useState({});
  const { endpointHash, requestHash } = useParams();

  useEffect(() => {
    const fetchPayload = async () => {
      try {
        const result = await PayloadService.get(endpointHash, requestHash);
        setPayload(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPayload();
  }, [endpointHash, requestHash]);

  if (!payload.body || !payload.headers) {
    return null;
  }

  const headers = Object.entries(payload.headers);

  return (
    <>
      <PayloadHeaders headers={headers} />
      <PayloadBody body={payload.body} />
    </>
  );
}

export default Payload;
