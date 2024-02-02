import { useParams } from "react-router-dom";

function PayloadPlaceholder() {
  const { endpointHash } = useParams();
  return (
    <div>
      <h2>Send requests to {endpointHash}</h2>
    </div>
  );
}

export default PayloadPlaceholder;
