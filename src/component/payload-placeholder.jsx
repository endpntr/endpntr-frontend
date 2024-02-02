import { useParams } from "react-router-dom";

function PayloadPlaceholder() {
  const { endpointHash } = useParams();
  return (
    <div className="text-center text-2xl m-3">
      <h2>
        Send requests to{" "}
        <span className="bg-black p-2 rounded-lg">
          https://endpntr.com/api/req/{endpointHash}
        </span>
      </h2>
    </div>
  );
}

export default PayloadPlaceholder;
